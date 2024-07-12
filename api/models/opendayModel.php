<?php
include "../classes/openday.php";

class OpendayModel extends BDD
{
  public function getOpendays(): array
  {
    try {
      $query = "SELECT * FROM openday;";
      $stmt = $this->connection->prepare($query);
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_CLASS, "Openday");
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
