<?php
include "./classes/openday.php";

class OpendayModel extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

  public function getOpendays(): array
  {
    try {
      $query = "SELECT * FROM openday;";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "Openday");
      $stmt->execute();
      return $stmt->fetchAll();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
