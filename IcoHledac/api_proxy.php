<?php
$ico = $_GET['ico'];
$url = 'https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty-nrpzs/' . $ico;
$response = file_get_contents($url);

header('Content-Type: application/json');
echo $response;
?>
