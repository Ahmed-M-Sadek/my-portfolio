const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted-gold text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6">Contact</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-gold rounded hover:bg-dark-grey"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
