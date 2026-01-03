const API_URL = "http://localhost:5000/api/contacts";

export const addContact = async (contact) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact)
  });

  if (!res.ok) throw new Error("Failed to add contact");
  return res.json();
};

export const getContacts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const deleteContact = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Failed to delete contact");
};
