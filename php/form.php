<?php

if($_GET['action'] == 'add') {
    $handle = fopen('obj.txt', 'a');
    $line = $_POST['name'] . ',' . $_POST['health'] . ',' . $_POST['force'] . "\n";
    fwrite($handle, $line);
    fclose($handle);
    echo 'Строка добавлена в файл.';
} else if($_GET['action'] == 'clear') {
    file_put_contents('obj.txt', '');
    echo 'Файл очищен!';
} else if($_GET['action'] == 'show') {
    echo '<!doctype html>';
    echo '<html>';
    echo '<head></head>';
    echo '<body><h2>Содержимое файла:</h2><p>';
    echo str_replace("\n", '<br>', file_get_contents('obj.txt'));
    echo '</p></body>';
}