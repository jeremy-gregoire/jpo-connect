<?php

class ModelUserRole extends BDD
{
    // toujours mettre le construct pour la création de la classe et faire la connexion avec la base de donnée
    public function __construct()
    {
        parent::__construct();
    }
    // fin du construct, toujours ce format là cherche pas à te prendre la tête
    
    public function addUserRole(int $id_role, int $id_user)
    {
        try {
            $query = "insert into role_user (id_role, id_user) values (:id_role, :id_user)";
            $stmt = $this->connection->prepare($query);

            $stmt->bindParam(":id_role", $id_role, PDO::PARAM_INT);
            $stmt->bindParam(":id_user", $id_user, PDO::PARAM_INT);

            $stmt->execute();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}