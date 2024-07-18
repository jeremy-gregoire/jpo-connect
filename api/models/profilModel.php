<?php
include "./classes/user.php";

class ModelProfil extends BDD
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUserData(int $id)
    {
        try {
            $query = "SELECT * from user WHERE id = :id;";
            $stmt = $this->connection->prepare($query);
            $stmt->setFetchMode(PDO::FETCH_CLASS, "User");
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}
