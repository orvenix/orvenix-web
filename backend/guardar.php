<?php
declare(strict_types=1);

function wantsJson(): bool
{
    $accept = (string)($_SERVER['HTTP_ACCEPT'] ?? '');
    $requestedWith = (string)($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '');

    return str_contains($accept, 'application/json') || strtolower($requestedWith) === 'xmlhttprequest';
}

function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);

    if (wantsJson()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $target = $statusCode >= 400 ? '/?error=1#contacto' : '/?enviado=1#contacto';
    header('Location: ' . $target);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Metodo no permitido.']);
}

if (!empty($_POST['_gotcha'])) {
    respond(200, ['ok' => true, 'message' => 'Solicitud recibida.']);
}

$nombre = trim((string)($_POST['nombre'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$empresa = trim((string)($_POST['empresa'] ?? ''));
$servicio = trim((string)($_POST['servicio'] ?? ''));
$presupuesto = trim((string)($_POST['presupuesto'] ?? ''));
$mensaje = trim((string)($_POST['mensaje'] ?? ''));
$privacyAccepted = isset($_POST['privacy']) || isset($_POST['privacidad']);

if (
    $nombre === '' ||
    $email === '' ||
    $servicio === '' ||
    $mensaje === '' ||
    !$privacyAccepted ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    respond(422, ['ok' => false, 'message' => 'Por favor completa los campos obligatorios correctamente.']);
}

$storageDir = dirname(__DIR__) . '/sistema';
$storageFile = $storageDir . '/contactos.csv';
$uploadsDir = $storageDir . '/uploads';

if (!is_dir($storageDir) && !mkdir($storageDir, 0775, true) && !is_dir($storageDir)) {
    respond(500, ['ok' => false, 'message' => 'No se pudo preparar el almacenamiento del formulario.']);
}

$uploadedFileName = '';
if (isset($_FILES['archivo']) && is_array($_FILES['archivo'])) {
    $fileError = (int)($_FILES['archivo']['error'] ?? UPLOAD_ERR_NO_FILE);

    if ($fileError !== UPLOAD_ERR_NO_FILE) {
        if ($fileError !== UPLOAD_ERR_OK) {
            respond(422, ['ok' => false, 'message' => 'No se pudo subir el archivo adjunto.']);
        }

        if (!is_dir($uploadsDir) && !mkdir($uploadsDir, 0775, true) && !is_dir($uploadsDir)) {
            respond(500, ['ok' => false, 'message' => 'No se pudo preparar la carpeta de archivos.']);
        }

        $originalName = (string)($_FILES['archivo']['name'] ?? 'archivo');
        $safeName = preg_replace('/[^A-Za-z0-9._-]/', '-', basename($originalName)) ?: 'archivo';
        $uploadedFileName = date('YmdHis') . '-' . $safeName;
        $destination = $uploadsDir . '/' . $uploadedFileName;

        if (!move_uploaded_file((string)$_FILES['archivo']['tmp_name'], $destination)) {
            respond(500, ['ok' => false, 'message' => 'No se pudo guardar el archivo adjunto.']);
        }
    }
}

$fp = fopen($storageFile, 'ab');
if ($fp === false) {
    respond(500, ['ok' => false, 'message' => 'No se pudo guardar la información del formulario.']);
}

$createdAt = date('c');
$saved = fputcsv($fp, [
    $createdAt,
    $nombre,
    $email,
    $empresa,
    $servicio,
    $presupuesto,
    $mensaje,
    $uploadedFileName,
]);
fclose($fp);

if ($saved === false) {
    respond(500, ['ok' => false, 'message' => 'No se pudo completar el guardado del formulario.']);
}

respond(200, ['ok' => true, 'message' => 'Formulario enviado correctamente.']);
