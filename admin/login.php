<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

orvenix_start_session();

if (orvenix_is_logged_in()) {
    header('Location: /admin/admin.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim((string)($_POST['usuario'] ?? ''));
    $password = (string)($_POST['password'] ?? '');

    if ($usuario === orvenix_admin_user() && password_verify($password, orvenix_admin_password_hash())) {
        $_SESSION['user'] = $usuario;
        header('Location: /admin/admin.php');
        exit;
    }

    $error = 'Usuario o contrasena incorrectos.';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceso Admin</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #0f172a;
      color: #e2e8f0;
      font-family: Arial, sans-serif;
    }
    .panel {
      width: min(420px, calc(100vw - 2rem));
      background: #111827;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 2rem;
      box-sizing: border-box;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    }
    h1 {
      margin: 0 0 0.5rem;
      font-size: 1.75rem;
    }
    p {
      margin: 0 0 1.5rem;
      color: #94a3b8;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }
    input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.85rem 1rem;
      border-radius: 10px;
      border: 1px solid #334155;
      background: #020617;
      color: #e2e8f0;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 0.9rem 1rem;
      border: 0;
      border-radius: 10px;
      background: #38bdf8;
      color: #082f49;
      font-weight: 700;
      cursor: pointer;
    }
    .error {
      margin-bottom: 1rem;
      padding: 0.8rem 1rem;
      border-radius: 10px;
      background: rgba(239, 68, 68, 0.15);
      color: #fecaca;
    }
  </style>
</head>
<body>
  <main class="panel">
    <h1>Panel Orvenix</h1>
    <p>Accede para revisar los contactos guardados desde la web.</p>
    <?php if ($error !== ''): ?>
      <div class="error"><?= orvenix_e($error) ?></div>
    <?php endif; ?>
    <form method="POST">
      <label for="usuario">Usuario</label>
      <input id="usuario" type="text" name="usuario" autocomplete="username" required>
      <label for="password">Contrasena</label>
      <input id="password" type="password" name="password" autocomplete="current-password" required>
      <button type="submit">Entrar</button>
    </form>
  </main>
</body>
</html>
