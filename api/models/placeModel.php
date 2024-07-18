<?php
include "./classes/place.php";

class PlaceModel extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

  public function getPlaces(): array
  {
    try {
      $query = "SELECT * FROM place;";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "Place");
      $stmt->execute();
      return $stmt->fetchAll();
    } catch (PDOException $e) {
      throw new Exception($e->getMessage());
    }
  }
}
