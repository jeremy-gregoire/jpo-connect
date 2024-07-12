<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once "./bdd.php";

if (!isset($_GET["query"])) {
  $_GET["query"] = "error";
}

switch ($_GET["query"]) {
  case "opendays":
    include "./models/opendayModel.php";
    $model = new OpendayModel();
    echo json_encode($model->getOpendays());
    break;
  case "error":
    header("Content-Type: application/json");
    echo json_encode([
      "status" => 404,
      "message" => "Invalid request"
    ]);
    break;
}
