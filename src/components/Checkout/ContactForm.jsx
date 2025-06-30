const ContactForm = () => {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <a href="/login" className="text-blue-600 text-sm underline">log in</a>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:border-[#1773B0] focus:outline-none"
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-600" />
            Email me with news and offers
          </label>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  