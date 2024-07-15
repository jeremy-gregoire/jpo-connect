<?php
include "./user.php";
class ModelUser extends BDD
{
    public function __construct()
    {
        parent::__construct();
    }
    // ici on a la requete pour récupérer un utilisateur
    // ca correspond à l'entité qu'on a du crée parce qu'on avait deux cardinalité infinie
    public function getUser(string $email)
    {
        try {
            $query = "select * from user where email = :email;";
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(":email", $email, PDO::PARAM_STR);
            $stmt->execute();
            return $stmt->fetch();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }

    // ici on a la requête pour crée un utilisateur
    public function createUser(User $user, string $password): bool
    {
        try {
            $sql = "INSERT INTO user (firstname, lastname, email, password, avatar) VALUES (:firstname, :lastname, :email, :password, :avatar);";
            $stmt = $this->connection->prepare($sql);

            $pwd = password_hash($password, PASSWORD_BCRYPT);

            $stmt->bindParam(':firstname', $user->firstname, PDO::PARAM_STR);
            $stmt->bindParam(':lastname', $user->lastname, PDO::PARAM_STR);
            $stmt->bindParam(':email', $user->email, PDO::PARAM_STR);
            $stmt->bindParam(':password', $pwd, PDO::PARAM_STR); // Hasher le mot de passe
            $stmt->bindParam(':avatar', $user->avatar, PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}