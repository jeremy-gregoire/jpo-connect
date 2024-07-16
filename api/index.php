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
  case "openday":
    include "./models/opendayModel.php";
    $model = new OpendayModel();
    $data = json_decode(file_get_contents("php://input"));
    echo json_encode($model->getOpenday($data->id));
    break;
  case "addOpenday":
    include "./models/opendayModel.php";

    $data = json_decode(file_get_contents("php://input"));

    $openday = new Openday();
    $openday->title = $data->title;
    $openday->description = $data->description;
    $openday->max_participants = $data->max_participants;
    $openday->nb_participants = $data->nb_participants;
    $openday->opening_date = $data->opening_date;
    $openday->opening_time = $data->opening_time;
    $openday->closing_time = $data->closing_time;
    $openday->id_place = $data->id_place;

    $model = new OpendayModel();
    $model->addOpenday($openday);

    echo json_encode([
      "message" => "Data successfully added!",
    ]);
    break;
  case "modifyOpenday":

    include "./models/opendayModel.php";

    $data = json_decode(file_get_contents("php://input"));

    $openday = new Openday();
    $openday->title = $data->title;
    $openday->description = $data->description;
    $openday->max_participants = $data->max_participants;
    $openday->nb_participants = $data->nb_participants;
    $openday->opening_date = $data->opening_date;
    $openday->opening_time = $data->opening_time;
    $openday->closing_time = $data->closing_time;
    $openday->id_place = $data->id_place;

    $model = new OpendayModel();
    $model->modifyOpenday($data->id, $openday);
    echo json_encode([
      "message" => "Data successfully modified!",
    ]);
    break;
  case "places":
    include "./models/placeModel.php";
    $model = new PlaceModel();
    echo json_encode($model->getPlaces());
    break;
}
