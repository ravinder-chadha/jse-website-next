import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import HeadingTitle from '../common/HeadingTitle';

interface Values {
  name: string;
  phonecode: string;
  phoneno: string;
  email: string;
  purpose: string;
  street: string;
  city: string;
  country: string;
  paymentMode: string;

}

const donateFormSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phonecode: Yup.string(),
  phoneno: Yup.string().matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),

  purpose: Yup.string().required('Purpose is required'),
  street: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  paymentMode: Yup.string().required('Payment Mode is required'),


});

const Formikform = () => {
  return (
    <div>
      <HeadingTitle
        title="Fill out the form"
        subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque."
        className="mx-auto text-center"
      />
      <Formik
        initialValues={{
          name: '',
          phonecode: '',
          phoneno: '',
          email: '',
          purpose: '',
          street: '',
          city: '',
          country: '',
          paymentMode: ''
        }}
        validationSchema={donateFormSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form className='flex flex-col items-center justify-centers gap-10'>
          <div className="flex md:flex-row flex-col md:gap-8 items-center w-3/4 justify-center gap-4">
            <div className="flex flex-col w-full gap-3">
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
              <label htmlFor="purpose">Purpose Of donation*</label>
              <Field
                id="purpose"
                as="select"
                name="purpose"
                className="border border-gray-400 rounded-lg px-3 py-2"
              >
                <option value="red">helping poor</option>
                <option value="green">helping cows</option>
                <option value="blue">heling to build temple</option>
              </Field>
            </div>
            <div className="flex flex-col  w-full gap-3">
              <label htmlFor="street">Address</label>
              <Field
                id="street"
                type="text"
                name="street"
                placeholder="street"
                className="border border-gray-400 rounded-lg px-3 py-2"
              />
              <label htmlFor="city">City</label>
              <Field
                id="city"
                name="city"
                placeholder="city"
                type="string"
                className="border border-gray-400 inline rounded-lg px-3 py-2"
              />
              <label htmlFor="country">Country</label>
              <Field
                id="country"
                name="country"
                placeholder="India"
                type="string"
                className="border border-gray-400 rounded-lg px-3 py-2"
              />
              <label htmlFor="dontaion">Method Of donation*</label>
              <Field
                id="dontaion"
                as="select"
                name="dontaion"
                className="border border-gray-400 rounded-lg px-3 py-2"
              >
                <option value="upi">UPI</option>
                <option value="transfer">Bank Transfer</option>
                <option value="demand">Demand Draft</option>
                <option value="cheque">Cheque</option>
              </Field>
            </div>
          </div>
          <button
            type="submit"
            onClick={()=> { }}
            className="bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Formikform;