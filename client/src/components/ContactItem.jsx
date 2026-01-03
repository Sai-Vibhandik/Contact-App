const ContactItem = ({ contact, onDelete }) => {
  return (
    <div className="py-4 flex justify-between items-center hover:bg-slate-800 px-2 rounded-lg transition">
      <div>
        <p className="font-semibold text-slate-100">
          {contact.name}
        </p>
        <p className="text-sm text-slate-400">
          {contact.email}
        </p>
        <p className="text-sm text-slate-300">
          {contact.phone}
        </p>
        {contact.message && (
          <p className="text-sm text-slate-400">
            {contact.message}
          </p>
        )}
      </div>

      <button
        onClick={() => onDelete(contact._id)}
        className="text-red-400 hover:text-red-500 transition mr-4 bg-gray-600 p-1 rounded pl-2 pr-2 hover:bg-gray-300"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;

