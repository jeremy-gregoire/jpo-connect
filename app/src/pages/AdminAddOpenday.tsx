import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { z } from 'zod';

const OpendaySchema = z.object({
  title: z.string(),
  description: z.string(),
  max_participants: z.number().min(0),
  nb_participants: z.number().min(0),
  opening_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'), // YYYY-MM-DD
  opening_time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'), // HH:MM
  closing_time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'), // HH:MM
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

// Setup my types as my schemas
type Openday = z.infer<typeof OpendaySchema>;
type Place = z.infer<typeof PlaceSchema>;

const apiPath = 'http://localhost:80/webalizer/jpo-connect';

export default function AdminAddOpenday() {
  const todayDate: string = new Date().toISOString().split('T')[0];
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    axios
      .get(`${apiPath}/api/index.php?query=places`)
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((e) => console.error(e.message));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const openday: Openday = {
      title: formData.get('title')?.toString() || '',
      description: formData.get('description')?.toString() || '',
      max_participants: parseInt(formData.get('max_participants')?.toString() || '0'),
      nb_participants: parseInt(formData.get('nb_participants')?.toString() || '0'),
      opening_date: formData.get('opening_date')?.toString() || '',
      opening_time: formData.get('opening_time')?.toString() || '',
      closing_time: formData.get('closing_time')?.toString() || '',
      id_place: parseInt(formData.get('place')?.toString() || '1'),
    };
    const safeObject = OpendaySchema.safeParse(openday);

    if (safeObject.success) {
      axios
        .post(
          `${apiPath}/api/index.php`,
          {
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
              query: 'addOpenday',
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
      form.reset();
    } else {
      console.error(safeObject.error.message);
    }
  };

  return (
    <>
      <h1>Ajouter une journée portes ouvertes</h1>
      <form onSubmit={handleSubmit} method='post'>
        <div>
          <label htmlFor='title'>Titre</label>
          <input type='text' name='title' id='title' />
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' />
        </div>

        <div>
          <label htmlFor='place'>Lieu</label>
          <select name='place' id='place'>
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
          <label htmlFor='max_participants'>Maximum de participant</label>
          <input
            type='number'
            name='max_participants'
            id='max_participants'
            defaultValue={0}
            min={0}
          />
        </div>

        <div>
          <label htmlFor='opening_date'>Date d'ouverture</label>
          <input
            type='date'
            name='opening_date'
            id='opening_date'
            min={todayDate}
            defaultValue={todayDate}
          />
        </div>

        <div>
          <label htmlFor='opening_time'>Heure d'ouverture</label>
          <input type='time' name='opening_time' id='opening_time' />
        </div>

        <div>
          <label htmlFor='closing_time'>Heure de fermeture</label>
          <input type='time' name='closing_time' id='closing_time' />
        </div>

        <button type='submit'>Ajouter</button>
      </form>
    </>
  );
}
