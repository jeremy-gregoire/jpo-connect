<?php
include "./classes/user.php";

class ModelUser extends BDD
{
  public function __construct()
  {
    parent::__construct();
  }

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

  public function getEmployees(): array
  {
    try {
      $query = "SELECT user.id, user.firstname, user.lastname, user.email, user.avatar, user.updated_at, user.created_at FROM user INNER JOIN role_user ON user.id = role_user.id_user INNER JOIN role ON role.id = role_user.id_role WHERE role.label <> \"Utilisateur\";";
      $stmt = $this->connection->prepare($query);
      $stmt->setFetchMode(PDO::FETCH_CLASS, "User");
      $stmt->execute();
      return $stmt->fetchAll();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }

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

  public function modifyHighUser(int $old_id_role, int $id_user, int $new_id_role): void
  {
    try {
      $query = "UPDATE role_user SET id_role = :new_id_role, updated_at = CURRENT_TIMESTAMP WHERE id_role = :old_id_role AND id_user = :id_user;";
      $stmt = $this->connection->prepare($query);

      $stmt->bindParam(":old_id_role", $old_id_role, PDO::PARAM_INT);
      $stmt->bindParam(":id_user", $id_user, PDO::PARAM_INT);
      $stmt->bindParam(":new_id_role", $new_id_role, PDO::PARAM_INT);

      $stmt->execute();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }

  public function deleteUser(int $id): void
  {
    try {
      $query = "DELETE FROM user WHERE id = :id;";
      $stmt = $this->connection->prepare($query);
      $stmt->bindParam(":id", $id, PDO::PARAM_INT);
      $stmt->execute();
    } catch (PDOException $e) {
      throw new Error($e->getMessage());
    }
  }
}
