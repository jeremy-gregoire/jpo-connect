<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once "./bdd.php";

if (!isset($_GET["query"])) {
  $_GET["query"] = "error";
}

switch ($_GET["query"]) {
  case "register":
    header("Location: index.php");
    break;

  case "error":
    header("Content-Type: application/json");
    echo json_encode([
      "status" => 404,
      "message" => "Invalid request"
    ]);
    break;
}
