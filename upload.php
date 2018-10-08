<?php
    $img = $_POST['imageToUpload'];
    $data = base64_decode($img);
    $file = "images/"."drawing.png";
    $success = file_put_contents($file, $data);
    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit();
?>
