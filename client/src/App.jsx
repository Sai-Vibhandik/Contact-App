import { useEffect, useState } from "react";
import ContactForm from "./components/Contactform";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";
import { getContacts } from "./services/ContactServices";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-8 py-6">
      
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
        <span className="text-indigo-400">Contact</span>{" "}
        <span className="text-slate-100">Manager</span>
      </h1>

      {/* Search + Add */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-400"
        />

        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-medium"
        >
          + Add Contact
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <ContactForm
          onSuccess={() => {
            fetchContacts();
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      </Modal>

      {/* List */}
      <ContactList
        contacts={filteredContacts}
        refreshContacts={fetchContacts}
      />
    </div>
  );
}

export default App;
