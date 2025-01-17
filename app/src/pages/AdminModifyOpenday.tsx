import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

import NavBarAdmin from "../../assets/components/header_admin";

const apiPath = "http://localhost:80/webalizer/jpo-connect";

const OpendaySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  max_participants: z.number(),
  nb_participants: z.number(),
  opening_date: z.string(),
  opening_time: z.string(),
  closing_time: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  id_place: z.number(),
});

const PlaceSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  zipcode: z.string(),
  capacity: z.number(),
});

const OpendayRespectSchema = z.object({
  title: z.string(),
  description: z.string(),
  max_participants: z.number().min(0),
  nb_participants: z.number().min(0),
  opening_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"), // YYYY-MM-DD
  opening_time: z.string().regex(/^\d{2}:\d{2}:\d{2}$/, "Invalid time format"), // HH:MM:SS
  closing_time: z.string().regex(/^\d{2}:\d{2}:\d{2}$/, "Invalid time format"), // HH:MM:SS
  id_place: z.number(),
});

// Setup my type as my schema
type Openday = z.infer<typeof OpendaySchema>;
type OpendayRespect = z.infer<typeof OpendayRespectSchema>;
type Place = z.infer<typeof PlaceSchema>;

export default function AdminModifyOpenday() {
  const { id } = useParams();
  const [openday, setOpenday] = useState<Openday>({} as Openday);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        `${apiPath}/api/index.php`,
        {
          id: id,
        },
        {
          params: {
            query: "openday",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setOpenday(response.data);
        setSelectedPlace(String(response.data.id_place));
      })
      .catch((error) => console.error(error));

    axios
      .get(`${apiPath}/api/index.php?query=places`)
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const openday: OpendayRespect = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      max_participants: parseInt(formData.get("max_participants")?.toString() || "0"),
      nb_participants: parseInt(formData.get("nb_participants")?.toString() || "0"),
      opening_date: formData.get("opening_date")?.toString() || "",
      opening_time: formData.get("opening_time")?.toString() || "",
      closing_time: formData.get("closing_time")?.toString() || "",
      id_place: parseInt(formData.get("place")?.toString() || "1"),
    };
    const safeObject = OpendayRespectSchema.safeParse(openday);

    if (safeObject.success) {
      axios
        .post(
          `${apiPath}/api/index.php`,
          {
            id: id,
            title: openday.title,
            description: openday.description,
            max_participants: openday.max_participants,
            nb_participants: openday.nb_participants,
            opening_date: openday.opening_date,
            opening_time: openday.opening_time,
            closing_time: openday.closing_time,
            id_place: openday.id_place,
          },
          {
            params: {
              query: "modifyOpenday",
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((_) => navigate("/admin/opendays"))
        .catch((error) => console.log(error));
    } else {
      console.error(safeObject.error.message);
    }
  };

  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <h1 className="title">Modifier une porte ouverte</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" id="title" defaultValue={openday.title} />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" defaultValue={openday.description} />
        </div>

        <div>
          <label htmlFor="place">Lieu</label>
          <select
            name="place"
            id="place"
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
          >
            {places.map((place) => {
              return (
                <option key={crypto.randomUUID()} value={place.id}>
                  {place.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="max_participants">Maximum de participant</label>
          <input
            type="number"
            name="max_participants"
            id="max_participants"
            defaultValue={openday.max_participants}
            min={0}
          />
        </div>

        <div>
          <label htmlFor="opening_date">Date d'ouverture</label>
          <input
            type="date"
            name="opening_date"
            id="opening_date"
            defaultValue={openday.opening_date}
          />
        </div>

        <div>
          <label htmlFor="opening_time">Heure d'ouverture</label>
          <input
            type="time"
            name="opening_time"
            id="opening_time"
            defaultValue={openday.opening_time}
          />
        </div>

        <div>
          <label htmlFor="closing_time">Heure de fermeture</label>
          <input
            type="time"
            name="closing_time"
            id="closing_time"
            defaultValue={openday.closing_time}
          />
        </div>

        <div>
          <button type="submit">Modifier</button>
        </div>
      </form>
    </>
  );
}
