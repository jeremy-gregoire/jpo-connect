<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once "./bdd.php";

if (!isset($_POST["query"])) {
  $_POST["query"] = "error";
}

switch ($_POST["query"]) {
  case "error":
    header("Content-Type: application/json");
    echo json_encode([
      "status" => 404,
      "message" => "Invalid request"
    ]);
    break;
}
