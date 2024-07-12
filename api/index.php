<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "./classes/bdd.php";

switch ($_GET["query"]) {
  case 'opendays':
    include "./models/opendayModel.php";
    $model = new OpendayModel();
    echo json_encode($model->getOpendays());
    break;
}
