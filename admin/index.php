<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

header('Location: ' . (orvenix_is_logged_in() ? '/admin/admin.php' : '/admin/login.php'));
exit;
?>
