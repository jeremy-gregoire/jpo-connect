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
  case "addEmployee":
    include "./models/userModel.php";
    include "./models/roleUserModel.php";

    $model = new ModelUser();
    $userRoleModel = new ModelUserRole();

    $data = json_decode(file_get_contents("php://input"));

    $employee = new User();
    $employee->firstname = $data->firstname;
    $employee->lastname = $data->lastname;
    $employee->email = $data->email;
    $employee->avatar = $data->avatar;
    $model->createUser($employee, $data->password);

    $theEmployee = $model->getUser($employee->email);
    $userRoleModel->addUserRole(3, $theEmployee["id"]);

    echo json_encode($employee);
    break;
  case "deleteEmployee":
    include "./models/userModel.php";
    $data = json_decode(file_get_contents("php://input"));
    $model = new ModelUser();
    $model->deleteUser($data->id);
    break;
  case "roles":
    include "./models/roleModel.php";
    $model = new RoleModel();
    echo json_encode($model->getRoles());
    break;
  case "userRoleId":
    include "./models/roleUserModel.php";
    $model = new ModelUserRole();
    // echo json_encode($model->getUsersRoles());
    break;
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
  case "deleteOpenday":
    include "./models/opendayModel.php";
    $data = json_decode(file_get_contents("php://input"));
    $model = new OpendayModel();
    $model->deleteOpenday($data->id);
    break;
  case "places":
    include "./models/placeModel.php";
    $model = new PlaceModel();
    echo json_encode($model->getPlaces());
    break;
}
