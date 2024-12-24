import { useState } from "react";
import Tilt from "react-parallax-tilt";
import PageTransition from "@/components/PageTransition";

function Contact() {
  const [result, setResult] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setShowBanner(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }

    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="bg-background-dark h-[calc(100vh-4.6rem)]">
        <div
          className={`${
            showBanner
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          } fixed top-5 right-5 max-w-xs w-full p-4 bg-primary text-text-light rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50`}
        >
          {result}
        </div>
        <div className="mt-8 flex gap-x-4 md:gap-x-8 overflow-hidden justify-center">
          <span className="text-outlined uppercase text-4xl md:text-8xl font-black text-transparent whitespace-nowrap">
            Contact Us
          </span>
          <span className="text-text-light uppercase text-4xl md:text-8xl font-black whitespace-nowrap">
            Contact Us
          </span>
          <span className="text-outlined uppercase text-4xl md:text-8xl font-black text-transparent whitespace-nowrap">
            Contact Us
          </span>
        </div>
        <Tilt tiltEnable tiltMaxAngleX={2} tiltMaxAngleY={5}>
          <div className="mx-8 md:mx-10 mt-8 overflow-hidden">
            <form onSubmit={onSubmit}>
              <div className="m-auto flex flex-col p-8 bg-background-elevation rounded-lg shadow-lg px-8 md:px-12 py-8 max-w-2xl">
                <span className=" text-secondary-light uppercase tracking-widest m-auto mb-3">
                  Drop us a message
                </span>
                <input
                  type="hidden"
                  name="subject"
                  value="New message from Codex Website"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                  required
                />
                <textarea
                  placeholder="Enter your message..."
                  name="message"
                  rows="4"
                  className="bg-background-elevation py-2 my-3 border-b-2 border-secondary-light text-text-light outline-none"
                  required
                />
                <div className=" flex justify-center md:justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-transparent rounded-full border-2 border-secondary-light px-8 py-2 text-secondary-light cursor-pointer"
                  >
                    send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Tilt>
      </div>
    </PageTransition>
  );
}

export default Contact;
