import React from 'react';

type Display = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>; // Assuming you're using React state hooks
};

const UnderProgressPopup = ({ showPopup, setShowPopup }: Display) => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Site Under Progress</h2>
        <p className="text-gray-600">
          We are working hard to bring you an amazing website. Please check back later.
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCloseClick} // Use the click event handler function
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UnderProgressPopup;
