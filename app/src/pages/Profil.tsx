import React, { useEffect, useState } from "react";
import axios from "axios";

const Details: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [editableData, setEditableData] = useState<any>(null);
  const [editMode, setEditMode] = useState<any>({
    firstname: false,
    lastname: false,
    email: false,
  });
  const [globalEdit, setGlobalEdit] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .post(
        "http://localhost:80/jpo-connect/api/index.php",
        {
          id: 1,
        },
        {
          params: {
            query: "profil",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProfileData(response.data);
        setEditableData(response.data); // Initialize editable data
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleSave = (field: string) => {
    axios
      .post(
        "http://localhost:80/jpo-connect/api/update.php",
        {
          [field]: editableData[field],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProfileData({ ...profileData, [field]: editableData[field] });
        setEditMode({ ...editMode, [field]: false });
        alert("Profil mis à jour avec succès !");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleCancel = (field: string) => {
    setEditableData({ ...editableData, [field]: profileData[field] });
    setEditMode({ ...editMode, [field]: false });
  };

  const handleGlobalSave = () => {
    axios
      .post(
        "http://localhost:80/jpo-connect/api/update.php",
        {
          ...editableData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProfileData(editableData);
        setEditMode({
          firstname: false,
          lastname: false,
          email: false,
        });
        setGlobalEdit(false);
        alert("Profil mis à jour avec succès !");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleGlobalCancel = () => {
    setEditableData(profileData);
    setEditMode({
      firstname: false,
      lastname: false,
      email: false,
    });
    setGlobalEdit(false);
  };

  const toggleEditMode = (field: string) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const toggleGlobalEdit = () => {
    setGlobalEdit(!globalEdit);
    setEditMode({
      firstname: !globalEdit,
      lastname: !globalEdit,
      email: !globalEdit,
    });
  };

  return (
    <>
      {error && <p>Erreur: {error.message}</p>}
      {editableData && (
        <div>
          <div>
            <label>
              Prénom:
              {editMode.firstname ? (
                <input
                  type="text"
                  name="firstname"
                  value={editableData.firstname}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileData.firstname}</span>
              )}
            </label>
            {editMode.firstname ? (
              <>
                <button onClick={() => handleSave("firstname")}>Enregistrer</button>
                <button onClick={() => handleCancel("firstname")}>Annuler</button>
              </>
            ) : (
              <button onClick={() => toggleEditMode("firstname")}>Modifier</button>
            )}
          </div>
          <div>
            <label>
              Nom:
              {editMode.lastname ? (
                <input
                  type="text"
                  name="lastname"
                  value={editableData.lastname}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileData.lastname}</span>
              )}
            </label>
            {editMode.lastname ? (
              <>
                <button onClick={() => handleSave("lastname")}>Enregistrer</button>
                <button onClick={() => handleCancel("lastname")}>Annuler</button>
              </>
            ) : (
              <button onClick={() => toggleEditMode("lastname")}>Modifier</button>
            )}
          </div>
          <div>
            <label>
              E-mail:
              {editMode.email ? (
                <input
                  type="email"
                  name="email"
                  value={editableData.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileData.email}</span>
              )}
            </label>
            {editMode.email ? (
              <>
                <button onClick={() => handleSave("email")}>Enregistrer</button>
                <button onClick={() => handleCancel("email")}>Annuler</button>
              </>
            ) : (
              <button onClick={() => toggleEditMode("email")}>Modifier</button>
            )}
          </div>
          <div>
            <button onClick={toggleGlobalEdit}>
              {globalEdit ? "Arrêter la modification globale" : "Modifier tout le formulaire"}
            </button>
            {globalEdit && (
              <>
                <button onClick={handleGlobalSave}>Enregistrer tout</button>
                <button onClick={handleGlobalCancel}>Annuler tout</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
