<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

orvenix_start_session();
$_SESSION = [];
session_destroy();

header('Location: /admin/login.php');
exit;
?>
