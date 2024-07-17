<?php

include "./user.php";

class ConnectionModel extends BDD
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUserData()
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

    public function verifyUser(string $email, string $password)
    {
        try {
            $query = "SELECT * FROM user WHERE email = :email;";
            $stmt = $this->connection->prepare($query);
            $stmt->setFetchMode(PDO::FETCH_CLASS, "User");
            $stmt->bindParam(":email", $email, PDO::PARAM_STR);
            $stmt->execute();
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user->getPassword())) {
                return $user;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}
