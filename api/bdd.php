<?php
class BDD
{
  protected PDO $connection;

  public function __construct()
  {
    try {
      $this->connection = new PDO("mysql:host=localhost;dbname=jpoconnect", "root", "");
      $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
