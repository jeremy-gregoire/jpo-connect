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
  case "addOpenday":
    include "./models/opendayModel.php";
    $data = json_decode(file_get_contents("php://input"));
    $openday = new Openday($data->title, $data->description, $data->max_participants, $data->nb_participants, $data->opening_date, $data->opening_time, $data->closing_time, $data->id_place);
    $model = new OpendayModel();
    $model->addOpenday($openday);
    echo json_encode([
      "message" => "Données ajouter avec succès !",
    ]);
    break;
  case "places":
    include "./models/placeModel.php";
    $model = new PlaceModel();
    echo json_encode($model->getPlaces());
    break;
}
