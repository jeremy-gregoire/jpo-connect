<?php
class Openday
{
  public int $id;
  public string $title;
  public string $description;
  public int $max_participants;
  public int $nb_participants;
  public string $opening_date;
  public string $opening_time;
  public string $closing_time;
  public string $updated_at;
  public string $created_at;
  public int $id_place;

  public function __construct(string $title = "", string $description = "", int $max_participants = 0, int $nb_participants = 0, string $opening_date = "", string $opening_time = "", string $closing_time = "", int $id_place = 0)
  {
    $this->title = $title;
    $this->description = $description;
    $this->max_participants = $max_participants;
    $this->nb_participants = $nb_participants;
    $this->opening_date = $opening_date;
    $this->opening_time = $opening_time;
    $this->closing_time = $closing_time;
    $this->id_place = $id_place;
  }
}
