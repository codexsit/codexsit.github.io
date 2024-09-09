import PageTransition from "@/components/PageTransition";

function Contact() {
  return (
    <PageTransition>
      <div className="bg-background-dark h-[calc(100vh-4.6rem)]">
        <div className="mt-8 flex gap-x-8 overflow-hidden">
          <span className="text-outlined uppercase text-8xl font-black text-transparent whitespace-nowrap">
            Contact Us
          </span>
          <span className="text-text-light uppercase text-8xl font-black whitespace-nowrap">
            Contact Us
          </span>
          <span className="text-outlined uppercase text-8xl font-black text-transparent whitespace-nowrap">
            Contact Us
          </span>
          <span className="text-text-light uppercase text-8xl font-black">
            Events
          </span>
        </div>
        <div className="mx-10 mt-16">
          <form>
            <div className="m-auto flex flex-col p-8 bg-background-elevation rounded-lg shadow-lg px-12 py-8 max-w-2xl">
              <span className=" text-secondary-light uppercase tracking-widest m-auto mb-3">
                Drop us a message
              </span>
              <input
                type="text"
                placeholder="Name"
                className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                required
              />
              <textarea
                placeholder="Enter your message..."
                rows="4"
                className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                required
              />
              <div className=" flex justify-end mt-4">
                <input
                  type="submit"
                  value="send"
                  className="bg-transparent rounded-full border-2 border-secondary-light px-8 py-2 text-secondary-light cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;
