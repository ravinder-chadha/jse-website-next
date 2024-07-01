import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import HeadingTitle from '../common/HeadingTitle';
import toast, { Toaster } from 'react-hot-toast';
import { collection, addDoc } from 'firebase/firestore';
import database from '../../../firebaseConfig'; // Adjust the path as per your Firebase configuration

interface Values {
  name: string;
  phonecode: string;
  phoneno: string;
  email: string;
  street: string;
  city: string;
  country: string;
  purpose: string;
}

type Display = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const volunteerFormSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phonecode: Yup.string(),
  phoneno: Yup.string().matches(/^[0-9]{10}$/, 'Phone Number must be exactly 10 digits').required('Phone Number is required'),
  street: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  purpose: Yup.string().required('Purpose is required'),
});

const VolunteerForm = ({ showPopup, setShowPopup }: Display) => {
  if (showPopup === undefined) {
    showPopup = true;
  }
  if (!showPopup) {
    return null;
  }

  const handleCloseClick = () => {
    setShowPopup(false); // Update the state to close the pop-up
  };

  const handleSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    try {
      const docRef = await addDoc(collection(database, 'volunteerForms'), values);
      console.log('Document written with ID: ', docRef.id);

      toast.success('Form submitted successfully!');
      setSubmitting(false);
      setShowPopup(false); // Close the popup after successful submission
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-scroll z-100">
      <div className="bg-white pt-2 mt-4 px-8 py-4 flex flex-col items-center border border-jse-natural-300 justify-center rounded shadow-xl">
        <HeadingTitle title="Volunteer form" className="mx-auto text-center mt-2" />
        <Formik
          initialValues={{
            name: '',
            phonecode: '',
            phoneno: '',
            email: '',
            street: '',
            city: '',
            country: '',
            purpose: '',
          }}
          validationSchema={volunteerFormSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-center justify-centers md:gap-10 gap-3">
              <div className="flex md:flex-row flex-col md:gap-8 gap-3 md:items-start items-center sm:gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name" placeholder="John Doe" className="border border-gray-400 rounded-lg px-3 py-2" />

                  <label htmlFor="phonecode">Phone No</label>
                  <div className="flex">
                    <Field as="select" id="phonecode" name="phonecode" placeholder="Doe" style={{ width: '80px' }} className="border inline border-gray-400 rounded-lg py-2 mr-4">
                      <option value="+91">+91</option>
                    </Field>
                    <Field id="phoneno" name="phoneno" placeholder="1234567890" className="border w-full border-gray-400 inline rounded-lg px-3 py-2" maxLength={10} />
                  </div>
                  {errors.phoneno && touched.phoneno ? <div className="text-red-500">{errors.phoneno}</div> : null}

                  <label htmlFor="email">Email*</label>
                  <Field id="email" name="email" placeholder="john@gmail.com" type="email" className="border border-gray-400 rounded-lg px-3 py-2" />
                  {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
                </div>
                <div className="flex flex-col w-full  gap-2">
                  <label htmlFor="street">Address</label>
                  <Field id="street" name="street" placeholder="street" className="border border-gray-400 rounded-lg px-3 py-2" />
                  <label htmlFor="city">City</label>
                  <Field id="city" name="city" placeholder="city" className="border border-gray-400 rounded-lg px-3 py-2" />
                  <label htmlFor="country">Country</label>
                  <Field id="country" name="country" placeholder="India" className="border border-gray-400 rounded-lg px-3 py-2" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <h2 className="font-semibold text-lg">Purpose*</h2>
                <label htmlFor="message">How can you contribute to the event</label>
                <Field as="textarea" id="purpose" required={true} name="purpose" placeholder="Please enter your message here" className="border border-gray-400 rounded-lg px-3 py-2" />
                {errors.purpose && touched.purpose ? <div className="text-red-500">{errors.purpose}</div> : null}
              </div>
              <div className="flex flex-row gap-16 items-center justify-center">
                <button type="submit" className="bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400">
                  Submit
                </button>
                <button className="bg-jse-primary-500 text-white font-base rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400" onClick={handleCloseClick}>
                  Close
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Toaster />
    </div>
  );
};

export default VolunteerForm;
