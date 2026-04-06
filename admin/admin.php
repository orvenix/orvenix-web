<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

orvenix_require_login();

$search = trim((string)($_GET['buscar'] ?? ''));
$contacts = array_reverse(orvenix_read_contacts());

if ($search !== '') {
    $needle = mb_strtolower($search);
    $contacts = array_values(array_filter(
        $contacts,
        static function (array $contact) use ($needle): bool {
            $haystack = mb_strtolower(implode(' ', [
                $contact['nombre'],
                $contact['email'],
                $contact['empresa'],
                $contact['servicio'],
                $contact['presupuesto'],
                $contact['mensaje'],
            ]));

            return str_contains($haystack, $needle);
        }
    ));
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel Admin</title>
  <style>
    body {
      margin: 0;
      background: #0f172a;
      color: #e2e8f0;
      font-family: Arial, sans-serif;
    }
    .wrap {
      width: min(1180px, calc(100vw - 2rem));
      margin: 2rem auto;
    }
    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .title h1 {
      margin: 0 0 0.35rem;
    }
    .title p {
      margin: 0;
      color: #94a3b8;
    }
    .logout {
      color: #fca5a5;
      text-decoration: none;
      font-weight: 700;
    }
    .card {
      background: #111827;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 1.25rem;
      margin-bottom: 1rem;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
    }
    .stat-number {
      font-size: 2rem;
      font-weight: 700;
    }
    form {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    input {
      flex: 1 1 280px;
      padding: 0.9rem 1rem;
      border-radius: 10px;
      border: 1px solid #334155;
      background: #020617;
      color: #e2e8f0;
    }
    button, .clear-link {
      padding: 0.9rem 1rem;
      border-radius: 10px;
      border: 0;
      background: #38bdf8;
      color: #082f49;
      cursor: pointer;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }
    .clear-link {
      background: #1e293b;
      color: #cbd5e1;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 0.85rem;
      border-bottom: 1px solid #334155;
      text-align: left;
      vertical-align: top;
    }
    th {
      color: #7dd3fc;
      font-size: 0.9rem;
    }
    .message {
      min-width: 240px;
      max-width: 360px;
      white-space: pre-wrap;
    }
    .delete-link {
      color: #fca5a5;
      text-decoration: none;
      font-weight: 700;
    }
    .empty {
      color: #94a3b8;
    }
    @media (max-width: 900px) {
      .table-scroll {
        overflow-x: auto;
      }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <div class="topbar">
      <div class="title">
        <h1>Panel Orvenix</h1>
        <p>Mensajes capturados desde el formulario del sitio.</p>
      </div>
      <a class="logout" href="/admin/logout.php">Cerrar sesion</a>
    </div>

    <section class="stats">
      <div class="card">
        <div>Total de mensajes</div>
        <div class="stat-number"><?= count($contacts) ?></div>
      </div>
      <div class="card">
        <div>Archivo fuente</div>
        <div><?= orvenix_e(basename(ORVENIX_CONTACTS_FILE)) ?></div>
      </div>
    </section>

    <section class="card">
      <form method="GET">
        <input type="text" name="buscar" placeholder="Buscar por nombre, email, servicio o mensaje" value="<?= orvenix_e($search) ?>">
        <button type="submit">Buscar</button>
        <a class="clear-link" href="/admin/admin.php">Limpiar</a>
      </form>
    </section>

    <section class="card table-scroll">
      <?php if ($contacts === []): ?>
        <p class="empty">No hay mensajes guardados todavia.</p>
      <?php else: ?>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Empresa</th>
              <th>Servicio</th>
              <th>Presupuesto</th>
              <th>Mensaje</th>
              <th>Archivo</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($contacts as $contact): ?>
              <tr>
                <td><?= (int)$contact['id'] ?></td>
                <td><?= orvenix_e($contact['created_at']) ?></td>
                <td><?= orvenix_e($contact['nombre']) ?></td>
                <td><?= orvenix_e($contact['email']) ?></td>
                <td><?= orvenix_e($contact['empresa']) ?></td>
                <td><?= orvenix_e($contact['servicio']) ?></td>
                <td><?= orvenix_e($contact['presupuesto']) ?></td>
                <td class="message"><?= orvenix_e($contact['mensaje']) ?></td>
                <td><?= orvenix_e($contact['archivo']) ?></td>
                <td><a class="delete-link" href="/admin/eliminar.php?id=<?= (int)$contact['id'] ?>" onclick="return confirm('Se eliminara este mensaje. Continuar?');">Eliminar</a></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      <?php endif; ?>
    </section>
  </main>
</body>
</html>
