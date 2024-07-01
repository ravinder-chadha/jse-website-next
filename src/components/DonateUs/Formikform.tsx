import React, { useState } from 'react';
import HeadingTitle from '../common/HeadingTitle';
import database from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  phoneno: string;
  phonecode: string;
  email: string;
  purpose: string;
  street: string;
  city: string;
  country: string;
  paymentMode: string;
}

interface FormErrors {
  name?: string;
  phoneno?: string;
  email?: string;
  purpose?: string;
  street?: string;
  city?: string;
  country?: string;
  paymentMode?: string;
}

const Formikform = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneno: '',
    phonecode: '+91',
    email: '',
    purpose: '',
    street: '',
    city: '',
    country: '',
    paymentMode: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user starts typing
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Purpose is required';
    }

    if (!formData.paymentMode.trim()) {
      newErrors.paymentMode = 'Payment mode is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await addDoc(collection(database, 'entries'), formData);

      setFormData({
        name: '',
        phoneno: '',
        phonecode: '+91',
        purpose: '',
        street: '',
        city: '',
        country: '',
        paymentMode: '',
        email: '',
      });

      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <div>
      <HeadingTitle
        title="Fill out the form"
        subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque."
        className="mx-auto text-center"
      />
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-centers gap-10">
        <div className="flex md:flex-row flex-col md:gap-8 items-center w-3/4 justify-center gap-4">
          <div className="flex flex-col w-full gap-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="John Doe"
              className="border border-gray-400 rounded-lg px-3 py-2"
            />

            <label htmlFor="phonecode">Phone No</label>
            <div className="flex">
              <select
                id="phonecode"
                name="phonecode"
                onChange={handleChange}
                value={formData.phonecode}
                style={{ width: "80px" }}
                className="border inline border-gray-400 rounded-lg py-2 mr-4"
              >
                <option value="+91">+91</option>
              </select>
              <input
                id="phoneno"
                name="phoneno"
                onChange={handleChange}
                value={formData.phoneno}
                placeholder="123-456-7890"
                className="border w-full border-gray-400 inline rounded-lg px-3 py-2"
              />
            </div>

            <label htmlFor="email">Email*</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="john@gmail.com"
              type="email"
              className="border border-gray-400 rounded-lg px-3 py-2"
            />

            <label htmlFor="purpose">Purpose Of donation*</label>
            <select
              id="purpose"
              onChange={handleChange}
              value={formData.purpose}
              name="purpose"
              className={`border border-gray-400 rounded-lg px-3 py-2 ${errors.purpose ? 'border-red-500' : ''}`}
            >
              <option value="">Select Purpose</option>
              <option value="Elderly care">Elderly care</option>
              <option value="Free education">Free education</option>
              <option value="Free legal aid">Free legal aid</option>
              <option value="Mind wellness">Mind wellness</option>
              <option value="Saving cows">Saving cows</option>
              <option value="Planting trees">Planting trees</option>
              <option value="Medical help">Medical help</option>
            </select>
            {errors.purpose && <p className="text-red-500">{errors.purpose}</p>}
          </div>

          <div className="flex flex-col w-full gap-3">
            <label htmlFor="street">Address</label>
            <input
              id="street"
              type="text"
              value={formData.street}
              onChange={handleChange}
              name="street"
              placeholder="street"
              className="border border-gray-400 rounded-lg px-3 py-2"
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              value={formData.city}
              onChange={handleChange}
              name="city"
              placeholder="city"
              type="text"
              className="border border-gray-400 inline rounded-lg px-3 py-2"
            />

            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
              type="text"
              className="border border-gray-400 rounded-lg px-3 py-2"
            />

            <label htmlFor="paymentMode">Method Of donation*</label>
            <select
              id="paymentMode"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              className={`border border-gray-400 rounded-lg px-3 py-2 ${errors.paymentMode ? 'border-red-500' : ''}`}
            >
              <option value="">Select Method</option>
              <option value="upi">UPI</option>
              <option value="transfer">Bank Transfer</option>
              <option value="demand">Demand Draft</option>
              <option value="cheque">Cheque</option>
            </select>
            {errors.paymentMode && <p className="text-red-500">{errors.paymentMode}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Formikform;
