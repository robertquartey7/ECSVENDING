import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function ContactForm() {
  const [emailInfo, setEmailInfo] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

 
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_CLIENT_ID,
        process.env.NEXT_PUBLIC_TEMPLATE,
        emailInfo,
        process.env.NEXT_PUBLIC_CLIENT_SECRET
      )
      .then(
        (result) => {
          
          toast.success("Email sent !!!");
        },
        (error) => {
          toast.error("Something went wrong try again");
       
        }
      );
  }

  function handleChange(e) {
    const { name, value } = e.target;
   
    setEmailInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <form
      className="flex flex-col gap-2 bg-white h-full justify-center p-4 text-black rounded"
      onSubmit={handleSubmit}
    >
      <span className="font-bold text-2xl ">CONTACT US</span>
      <div>
        <input
          value={emailInfo.from_name}
          type="text"
          placeholder="Enter your Name"
          className="border-b-2 border-black w-full focus:outline-none"
          onChange={handleChange}
          name="from_name"
        />
      </div>
      <div>
        <input
          value={emailInfo.from_email}
          type="email"
          placeholder="Enter a valid email address"
          className="border-b-2 border-black w-full focus:outline-none "
          onChange={handleChange}
          name="from_email"
        />
      </div>
      <div>
        <textarea
          value={emailInfo.message}
          name="message"
          id=""
          cols="30"
          rows="4"
          className="border-b-2 border-black w-full focus:outline-none
          "
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className=" p-1 border-black border text-black w-fit "
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
