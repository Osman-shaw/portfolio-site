import { useState } from "react";
import contact from "../assets/contact.png"


const Contact =()=> {


     // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred.');
    }
  };

    return (
         <div className="m-4 grid gap-4 sm:grid-cols-2 pt-5">
         <div className="min-h-[100px] bg-indigo-980 shadow ml-5">
        <img className="w-100 h-100 object-cover" src={contact} alt="Contact" />
      </div>
      <div className="min-h-[100px] rounded-lg bg-indigo-980 shadow">
        <div className="max-w-2xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-yellow-750 mb-4 pt-3 border-b-1">
              Contact Us
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-base">Name</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                maxLength="100"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <label className="text-base">Email</label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxLength="100"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <label className="text-base">Message</label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                maxLength="500"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="pt-2 flex justify-center">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full md:w-auto"
                type="submit"
              >
                Send Message
              </button>
             </div>
              {status && (
              <div className="pt-2 text-center text-sm">
                <p className={status.includes('success') ? 'text-green-500' : 'text-red-500'}>
                  {status}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    )
}
export default Contact; 