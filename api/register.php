<?php
include ("./user.php");
class ModelUser extends BDD
{
    public function createUser(User $user, string $password): bool
    {
        try {
            $sql = "INSERT INTO user (firstname, lastname, email, password, avatar, role) VALUES (:firstname, :lastname; :email, :password, :avatar, :role)";
            $stmt = $this->connection->prepare($sql);

            $firstname = $user->getFirstname();
            $lastname = $user->getLastname();
            $email = $user->getEmail();
            $role = $user->getIdRole();
            $createdAt = $user->getCreatedAt();
            $updatedAt = $user->getUpdatedAt();

            $pwd =password_hash($password, PASSWORD_BCRYPT);

            $stmt->bindParam(':firstname', $firstname, PDO::PARAM_STR);
            $stmt->bindParam(':lastname', $lastname, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':password', $pwd, PDO::PARAM_STR); // Hasher le mot de passe
            $stmt->bindParam(':role', $role, PDO::PARAM_INT);
            $stmt->bindParam(':created_at', $createdAt, PDO::PARAM_STR);
            $stmt->bindParam(':updated_at', $updatedAt, PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}