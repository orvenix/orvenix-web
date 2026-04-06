<?php
declare(strict_types=1);

const ORVENIX_CONTACTS_FILE = __DIR__ . '/../sistema/contactos.csv';
const ORVENIX_DEFAULT_ADMIN_USER = 'admin';
const ORVENIX_DEFAULT_ADMIN_PASSWORD_HASH = '$2y$12$pFhWDWOAa2RsFMbBq/thZ.VSnOiPb0Gr6CWVS1.UR/sgk7nJG6Oc.';

function orvenix_start_session(): void
{
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function orvenix_admin_user(): string
{
    $user = trim((string) getenv('ORVENIX_ADMIN_USER'));
    return $user !== '' ? $user : ORVENIX_DEFAULT_ADMIN_USER;
}

function orvenix_admin_password_hash(): string
{
    $hash = trim((string) getenv('ORVENIX_ADMIN_PASSWORD_HASH'));
    return $hash !== '' ? $hash : ORVENIX_DEFAULT_ADMIN_PASSWORD_HASH;
}

function orvenix_is_logged_in(): bool
{
    orvenix_start_session();
    return isset($_SESSION['user']) && $_SESSION['user'] === orvenix_admin_user();
}

function orvenix_require_login(): void
{
    if (!orvenix_is_logged_in()) {
        header('Location: /admin/login.php');
        exit;
    }
}

function orvenix_e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function orvenix_read_contacts(): array
{
    if (!is_file(ORVENIX_CONTACTS_FILE)) {
        return [];
    }

    $handle = fopen(ORVENIX_CONTACTS_FILE, 'rb');
    if ($handle === false) {
        return [];
    }

    $contacts = [];
    $line = 0;

    while (($row = fgetcsv($handle)) !== false) {
        $line++;

        $contacts[] = [
            'id' => $line,
            'created_at' => (string)($row[0] ?? ''),
            'nombre' => (string)($row[1] ?? ''),
            'email' => (string)($row[2] ?? ''),
            'empresa' => (string)($row[3] ?? ''),
            'servicio' => (string)($row[4] ?? ''),
            'presupuesto' => (string)($row[5] ?? ''),
            'mensaje' => (string)($row[6] ?? ''),
            'archivo' => (string)($row[7] ?? ''),
        ];
    }

    fclose($handle);

    return $contacts;
}

function orvenix_delete_contact(int $targetId): bool
{
    $contacts = orvenix_read_contacts();
    $remaining = array_values(array_filter(
        $contacts,
        static fn(array $contact): bool => (int)$contact['id'] !== $targetId
    ));

    if (count($remaining) === count($contacts)) {
        return false;
    }

    $handle = fopen(ORVENIX_CONTACTS_FILE, 'wb');
    if ($handle === false) {
        return false;
    }

    foreach ($remaining as $contact) {
        fputcsv($handle, [
            $contact['created_at'],
            $contact['nombre'],
            $contact['email'],
            $contact['empresa'],
            $contact['servicio'],
            $contact['presupuesto'],
            $contact['mensaje'],
            $contact['archivo'],
        ]);
    }

    fclose($handle);

    return true;
}
