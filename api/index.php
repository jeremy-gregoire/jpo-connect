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
  case "userRole":
    include "./models/roleUserModel.php";
    $model = new ModelUserRole();
    $data = json_decode(file_get_contents("php://input"));
    echo json_encode($model->getUserRole($data->id));
    break;
}
