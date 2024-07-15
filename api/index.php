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
    $user = new User($data->firstname, $data->lastname, $data->email, "");
    $model->createUser($user, $data->password);

    $theUser = $model->getUser($user->email);
    // on crée un utlisateur en ajouatant l'id du role
    $modelRoleUser->addUserRole(4, $theUser["id"]);
    break;
}