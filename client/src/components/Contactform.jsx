import { useState } from "react";
import { addContact } from "../services/ContactServices";

const ContactForm = ({ onSuccess, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Name and phone are required");
      return;
    }

    try {
      await addContact({ name, email, phone, message });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setError("");
      onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-indigo-400">
        Add Contact
      </h2>

      {error && <p className="text-red-400">{error}</p>}

      <input
        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-400"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-400"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:border-indigo-400"
        placeholder="Message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-700 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
