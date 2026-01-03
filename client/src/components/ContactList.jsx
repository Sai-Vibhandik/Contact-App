import { deleteContact } from "../services/ContactServices";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, refreshContacts }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
    refreshContacts();
  };

  if (contacts.length === 0) {
    return <p className="text-slate-400">No contacts found</p>;
  }

  return (
    <div className="divide-y divide-slate-700">
      {contacts.map((contact) => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
