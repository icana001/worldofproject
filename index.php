<?php
$host = $_SERVER["HTTP_HOST"];
$uri = $_SERVER["REQUEST_URI"];

// Nur für worldofproject.com
if (preg_match("/worldofproject\.com/i", $host)) {
    $path = __DIR__ . "/WordPress_02" . $uri;
    
    // Wenn Verzeichnis, index.html laden
    if (is_dir($path)) {
        $path = rtrim($path, "/") . "/index.html";
    }
    
    if (file_exists($path)) {
        // Content-Type setzen
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        $types = [
            'html' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'svg' => 'image/svg+xml',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'ico' => 'image/x-icon'
        ];
        if (isset($types[$ext])) {
            header("Content-Type: " . $types[$ext]);
        }
        readfile($path);
        exit;
    }
}

// Fallback - 404
http_response_code(404);
echo "Not Found";
?>
