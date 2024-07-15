<?php
class UserRole
{
    public int $id_role;
    public int $id_user;

    // le construt ici permet de typer les variables qui sont des paramètres
    // on les mets à null par défaut

    public function __construct(int $id_role = null, int $id_user = null)
    {
        $this->id_role = $id_role;
        $this->id_user = $id_user;
    }
}