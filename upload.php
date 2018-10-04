<?php
$img = $_GET['name'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
$fileName = 'images/photo.png';
file_put_contents($fileName, $fileData);
?>