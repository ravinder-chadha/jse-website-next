import React, { useState } from "react";
import HeadingTitle from "../common/HeadingTitle";

const DonateUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    purpose: "",
    street: "",
    city: "",
    state: "",
    paymentMode: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };
  console.log(formData)

  return (
    <div className="flex flex-col items-center gap-8">
      <HeadingTitle
        title="Fill out the form"
        subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque."
        className="mx-auto text-center"
      />
      <form onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-3">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
            required
          />
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
            required
          />
          <label htmlFor="phoneCode">Phone No</label>
          <div className="flex">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-1 py-2 mr-2"
              style={{ width: "70px" }} // Adjust the width as needed
              required
            >
              <option value="+91">+91</option>
              {/* Add more phone codes as needed */}
            </select>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-3 py-2"
              required
            />
          </div>
          <label htmlFor="purpose">Purpose</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
            required
          >
            <option value="">Education Aid</option>
            <option value="helping-poor">Helping Poor</option>
            {/* Add more purpose options as needed */}
          </select>
        </div>
        <div className="flex flex-col gap-3">

          <label htmlFor="street">Adress</label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
          />

          <label htmlFor="city">City </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
          />

          <label htmlFor="state"> State </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
          />

          <label htmlFor="Payment mode">Payment Mode </label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg px-3 py-2"
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Demand Draft">Demand Draft</option>
            <option value="Cheque">Cheque</option>
            {/* Add more payment modes as needed */}
          </select>
        </div>
      </form>
      <div >
        <button
          type="submit"
          className="bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DonateUsForm;
