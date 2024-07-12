<?php
class Openday
{
  private int $id;
  private string $title;
  private string $description;
  private int $max_participants;
  private int $nb_participants;
  private string $opening_date;
  private string $opening_time;
  private string $closing_time;
  private string $updated_at;
  private string $created_at;

  public function __construct(string $title, string $description, string $max_participants, string $nb_participants, string $opening_date, string $opening_time, string $closing_time)
  {
    $this->title = $title;
    $this->description = $description;
    $this->max_participants = $max_participants;
    $this->nb_participants = $nb_participants;
    $this->opening_date = $opening_date;
    $this->opening_time = $opening_time;
    $this->closing_time = $closing_time;
  }

  public function getId(): int
  {
    return $this->id;
  }

  public function getTitle(): string
  {
    return $this->title;
  }

  public function getDescription(): string
  {
    return $this->description;
  }

  public function getMaxParticipants(): string
  {
    return $this->max_participants;
  }

  public function getNbParticipants(): string
  {
    return $this->nb_participants;
  }

  public function getOpeningData(): string
  {
    return $this->opening_date;
  }

  public function getOpeningTime(): string
  {
    return $this->opening_time;
  }

  public function getClosingTime(): string
  {
    return $this->closing_time;
  }

  public function getUpdatedAt(): string
  {
    return $this->updated_at;
  }

  public function getCreatedAt(): string
  {
    return $this->created_at;
  }
}
