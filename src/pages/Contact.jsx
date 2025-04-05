import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      formData,
      "USER_ID"
    ).then(
      () => alert("Email sent successfully!"),
      (error) => alert("Failed to send email: " + error.text)
    );
  };

  return (
    <div className="mx-auto p-6 bg-sky-500 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <p className="text-center text-gray-50">Feel free to reach out!</p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-gray-950 bg-white p-6 shadow-md rounded mt-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2">Message:</label>
        <textarea
          name="message"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        ></textarea>

        <button type="submit" className="btn btn-success w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
