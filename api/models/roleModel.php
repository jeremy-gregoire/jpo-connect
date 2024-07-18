<?php
include "./classes/role.php";

class RoleModel extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

  public function getRoles(): array
  {
    try {
      $query = "SELECT * FROM role;";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "Role");
      $stmt->execute();
      return $stmt->fetchAll();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
