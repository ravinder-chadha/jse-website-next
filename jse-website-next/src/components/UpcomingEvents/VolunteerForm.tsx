import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import HeadingTitle from '../common/HeadingTitle';

interface Values {
  name: string;
  phonecode: string;
  phoneno: string;
  email: string;
  street: string;
  city: string;
  country: string;
}

type Display = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>; // Assuming you're using React state hooks
};

const volunteerFormSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  // phone
  phonecode: Yup.string(),
  phoneno: Yup.string().matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
  // adresss
  street: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
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
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-scroll z-100">
      <div className="bg-white pt-2 mt-4 px-8 py-4 flex flex-col items-center border border-jse-natural-300 justify-center rounded shadow-xl">
        <HeadingTitle
          title="Volunteer form"
          className="mx-auto text-center mt-2"
        />
        <Formik
          initialValues={{
            name: '',
            // phone
            phonecode: '',
            phoneno: '',
            // email
            email: '',
            // address
            street: '',
            city: '',
            country: '',
          }}
          validationSchema={volunteerFormSchema}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            // console.log(values);
            setSubmitting(false);
          }}
        >
          <Form className='flex flex-col items-center justify-centers md:gap-10 gap-3'>
            <div className="flex md:flex-row flex-col md:gap-8 gap-3 md:items-start items-center sm:gap-2">
              <div className="flex flex-col  gap-2">
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="border border-gray-400 rounded-lg px-3 py-2"
                />

                <label htmlFor="phonecode">Phone No</label>
                <div className="flex">
                  <Field
                    as="select"
                    id="phonecode"
                    name="phonecode"
                    placeholder="Doe"
                    style={{ width: "80px" }}
                    className="border inline border-gray-400 rounded-lg py-2 mr-4"
                  >
                    <option value="red">+91</option>
                    <option value="green">+91</option>
                    <option value="blue">+91</option>
                  </Field>
                  <Field
                    id="phoneno"
                    name="phoneno"
                    placeholder="123-456-7890"
                    className="border w-full border-gray-400 inline rounded-lg px-3 py-2"
                  />
                </div>

                <label htmlFor="email">Email*</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="john@gmail.com"
                  type="email"
                  className="border border-gray-400 rounded-lg px-3 py-2"
                />

              </div>
              <div className="flex flex-col w-full  gap-2">
                <label htmlFor="street">Address</label>
                <Field
                  id="street"
                  name="street"
                  placeholder="street "
                  className="border border-gray-400 rounded-lg px-3 py-2"
                />
                <label htmlFor="city">City</label>
                <Field
                  id="city"
                  name="city"
                  placeholder="city"
                  className="border border-gray-400  rounded-lg px-3 py-2"
                />
                <label htmlFor="country">Country</label>
                <Field
                  id="country"
                  name="country"
                  placeholder="India"
                  className="border border-gray-400 rounded-lg px-3 py-2"
                />
              </div>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <h2 className='font-semibold text-lg'>Purpose</h2>
              <label htmlFor="message">How can you contribute to the event</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Message"
                className="border border-gray-400 rounded-lg px-3 py-2"
              />
            </div>
            <div className='flex flex-row gap-16 items-center justify-center'>
              <button
                type="submit"
                onClick={() => { }}
                className="bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
              >
                Submit
              </button>
              <button
                className=" bg-jse-primary-500 text-white font-base rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
                onClick={handleCloseClick} // Use the click event handler function
              >
                Close
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default VolunteerForm;

