import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_1hy8dfd",    
        "template_86ql0bk",   
        data,                 
        "51aqGA0r_roBJtDP3"      
      )
      .then(
        (result) => {
         Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Send your Data successfully",
  showConfirmButton: false,
  timer: 1500
});
          reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
    
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      {/* Main Content */}
      <div >
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-2/3 mx-auto space-y-6 bg-[#1e293b] p-6 rounded-lg border border-cyan-600 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="text-gray-300 block mb-1">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-cyan-500"
              placeholder="Enter your name"
            />
            {errors.name && <span className="text-red-400 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Your Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-cyan-500"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-400 text-sm">Email is required</span>}
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Message</label>
            <textarea
              rows="5"
              {...register("message", { required: true })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-cyan-500"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <span className="text-red-400 text-sm">Message is required</span>}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition"
          >
            Send Message
          </button>
        </motion.form>

       <div>
       </div>
      </div>
    </section>
  );
};

export default Contact;
