<?php

class User
{
    private $id;
    private $firstname;
    private $lastname;
    private $email;
    private $password;
    private $avatar;
    private $idRole;
    private $updateAt;
    private $createdAt;

    public function getId()
    {
        return $this->id;
    }
    public function getFirstname()
    {
        return $this->firstname;
    }
    public function getLastname()
    {
        return $this->lastname;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getAvatar()
    {
        return $this->avatar;
    }
    public function getIdRole()
    {
        return $this->idRole;
    }
    public function getUpdatedAt()
    {
        return $this->updateAt;
    }
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}