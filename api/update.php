<?php

class ModelUpdate extends BDD
{
    public function __construct()
    {
        parent::__construct();
    }

    public function updateUserData(int $id, array $data)
    {
        try {
            $fieldsToUpdate = [];
            foreach ($data as $field => $value) {
                $fieldsToUpdate[] = "$field = :$field";
            }
            $setPart = implode(', ', $fieldsToUpdate);
            $query = "UPDATE user SET $setPart WHERE id = :id";
            $stmt = $this->connection->prepare($query);

            foreach ($data as $field => &$value) {
                $stmt->bindParam(":$field", $value);
            }
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            return $stmt->execute();
        } catch (PDOException $e) {
            throw new Error($e->getMessage());
        }
    }
}