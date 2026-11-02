<?php
// Palate Story - XAMPP Apache Entrypoint
// Seamlessly routes to the compiled React SPA build, or static-html fallback

if (file_exists(__DIR__ . '/dist/index.html')) {
    readfile(__DIR__ . '/dist/index.html');
} elseif (file_exists(__DIR__ . '/static-html/index.html')) {
    readfile(__DIR__ . '/static-html/index.html');
} else {
    echo "<h1>Palate Story - React Build Pending</h1><p>Please run 'npm run build' to generate the production bundle.</p>";
}
?>
