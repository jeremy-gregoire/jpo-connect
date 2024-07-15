<?php

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
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->avatar = $avatar;
    }
}