<?php
class UserRole
{
    public int $id_role;
    public int $id_user;

    public function __construct(int $id_role = null, int $id_user = null)
    {
        $this->id_role = $id_role;
        $this->id_user = $id_user;
    }
}