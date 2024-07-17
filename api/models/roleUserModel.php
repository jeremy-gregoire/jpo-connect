<?php
class ModelUserRole extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

  public function addUserRole(int $id_role, int $id_user): void
  {
    try {
      $query = "insert into role_user (id_role, id_user) values (:id_role, :id_user)";
      $stmt = $this->connection->prepare($query);

      $stmt->bindParam(":id_role", $id_role, PDO::PARAM_INT);
      $stmt->bindParam(":id_user", $id_user, PDO::PARAM_INT);

      $stmt->execute();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
