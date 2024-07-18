<?php
class User
{
  public $id;
  public string $firstname;
  public string $lastname;
  public string $email;
  public string $avatar;
  private string $password;
  public string $updated_at;
  public string $created_at;

  public function getPassword()
  {
    return $this->password;
  }
}
