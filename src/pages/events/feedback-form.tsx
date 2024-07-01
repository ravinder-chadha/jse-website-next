import React from "react";
import { collection, addDoc } from "firebase/firestore";
import database from "../../../firebaseConfig";
import HeadingTitle from "@/components/common/HeadingTitle";
import toast, { Toaster } from "react-hot-toast";

const FeedbackForm = () => {
  const handleSubmitFeedback = async () => {
    const feedbackText = (document.getElementById("feedback") as HTMLInputElement).value;

    if (feedbackText === "") {
      toast.error("Please write something before submitting");
      return;
    }

    try {
      await addDoc(collection(database, "feedback"), {
        feedback: feedbackText,
      });

      (document.getElementById("feedback") as HTMLInputElement).value = "";
      toast.success("Your feedback has been submitted");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Error submitting feedback. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <HeadingTitle title="Anonymous Feedback" subtitle="Fueling Improvement and Growth" className="font-black text-center mx-auto" />
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <label htmlFor="feedback">Share Your Thoughts, suggestions, or ideas Anonymously. Please do not share any sensitive informations.</label>
        <textarea
          id="feedback"
          className="border md:w-7/12 w-full mt-2 border-gray-400 rounded-lg px-3 py-2"
          placeholder="Write your feedback here"
          rows={4}
        ></textarea>
        <button
          type="button"
          className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
          onClick={handleSubmitFeedback}
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default FeedbackForm;
