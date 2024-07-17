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
    include 'userModel.php';
    include 'userRoleModel.php';

    // instancier le modèle
    $model = new ModelUser();
    $modelRoleUser = new ModelUserRole();

    // on récupère ce qu'on a envoyer avec axios
    $data = json_decode(file_get_contents("php://input"));

    // Appeler la méthode createUser
    $user = new User();
    $user->firstname = $data->firstname;
    $user->lastname = $data->lastname;
    $user->email = $data->email;
    $user->avatar = "";
    $model->createUser($user, $data->password);

    $theUser = $model->getUser($user->email);
    // on crée un utlisateur en ajouatant l'id du role
    $modelRoleUser->addUserRole(4, $theUser["id"]);
    break;

  case "profil":
    include 'profilModel.php';

    $model = new ModelProfil();

    // on récupère ce qu'on a envoyer avec axios
    $data = json_decode(file_get_contents("php://input"));

    echo json_encode($model->getUserData($data->id));
    break;

  case "connection":
    include 'connectionModel.php';

    $model = new ConnectionModel();

    // on récupère ce qu'on a envoyer avec axios
    $data = json_decode(file_get_contents("php://input"));

    echo json_encode($model->verifyUser($data->email, $data->password));
    break;
}