<?php
include "./classes/user.php";
class ModelUser extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

  public function getEmployees(): array
  {
    try {
      $query = "SELECT user.id, user.firstname, user.lastname, user.email, user.avatar, user.updated_at, user.created_at FROM user INNER JOIN role_user ON user.id = role_user.id_user INNER JOIN role ON role.id = role_user.id_role WHERE role.label <> \"Utilisateur\";";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "User");
      $stmt->execute();
      return $stmt->fetchAll();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
