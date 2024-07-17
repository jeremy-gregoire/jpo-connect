<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "./classes/bdd.php";

switch ($_GET["query"]) {
  case "employees":
    include "./models/userModel.php";
    $model = new ModelUser();
    echo json_encode($model->getEmployees());
    break;
}
