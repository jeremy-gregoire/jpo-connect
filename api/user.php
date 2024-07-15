<?php
// cette classe permet de définir par défaut les données qui correspodnent à aux colones dans la table user
// quand on l'appel ce sont ces données qui sont envoyé dans le BDD
class User
{
    public $id;
    public string $firstname;
    public string $lastname;
    public string $email;
    public string $avatar;
    public string $updated_at;
    public string $created_at;

    public function __construct(string $firstname = "", string $lastname = "", string $email = "", string $avatar = "")
    {
        // ces paramètre permettent de dire ce qu'on envoie depuis cette classe
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->avatar = $avatar;
    }
}