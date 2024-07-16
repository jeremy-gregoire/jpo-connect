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

  public function getOpenday(int $id): Openday
  {
    try {
      $query = "SELECT * FROM openday WHERE id = :id;";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "Openday");
      $stmt->bindParam(":id", $id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }

  public function addOpenday(Openday $openday): void
  {
    try {
      $query = "INSERT INTO openday (title, description, max_participants, nb_participants, opening_date, opening_time, closing_time, id_place) VALUES (:title, :description, :max_participants, :nb_participants, :opening_date, :opening_time, :closing_time, :id_place);";
      $stmt = $this->connection->prepare($query);

      $stmt->bindParam(":title", $openday->title, PDO::PARAM_STR);
      $stmt->bindParam(":description", $openday->description, PDO::PARAM_STR);
      $stmt->bindParam(":max_participants", $openday->max_participants, PDO::PARAM_INT);
      $stmt->bindParam(":nb_participants", $openday->nb_participants, PDO::PARAM_INT);
      $stmt->bindParam(":opening_date", $openday->opening_date, PDO::PARAM_STR);
      $stmt->bindParam(":opening_time", $openday->opening_time, PDO::PARAM_STR);
      $stmt->bindParam(":closing_time", $openday->closing_time, PDO::PARAM_STR);
      $stmt->bindParam(":id_place", $openday->id_place, PDO::PARAM_INT);

      $stmt->execute();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
