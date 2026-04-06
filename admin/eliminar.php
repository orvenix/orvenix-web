<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

orvenix_require_login();

$id = (int)($_GET['id'] ?? 0);

if ($id > 0) {
    orvenix_delete_contact($id);
}

header('Location: /admin/admin.php');
exit;
?>
