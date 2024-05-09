import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ImagesGrid = ({ filteredImages, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(selectedImage);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        const link = document.createElement("a");
        link.href = base64data;
        link.setAttribute("download", `image_${new Date().getTime()}.jpg`);
        link.click();
      };
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  return (
    // {/* filteredImages && filteredImages.length > 0 */}
    <div className="flex flex-wrap ">
      {filteredImages && filteredImages.length > 0 ? (
        filteredImages.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col m-4 rounded-md shadow-lg bg-yellow-50 border gap-3 p-2 hover:scale-[103%] hover:cursor-pointer relative"
            onClick={() => openModal(item.img)}
          >
            <img
              src={item.img}
              alt={`img-${idx}`}
              className="w-[10rem] aspect-square object-contain"
            />
            <p className="text-center">{item.img_name}</p>
          </div>
        ))
      ) : images.length > 0 ? (
        <div>No Images Found!</div>
      ) : (
        <div>No Images Uploaded Yet !</div>
      )}
      {modalVisible && (
        <div className="fixed top-20 left-0 w-full h-full  flex items-center justify-center bg-gray-800 bg-opacity-75 shadow-2xl z-20">
          <div className="bg-yellow-50 p-4 rounded-lg max-w-md">
            <img
              src={selectedImage}
              alt="preview"
              className="w-full h-auto max-h-[70vh] "
            />
            <div className="flex justify-end mt-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={downloadImage}
              >
                Download
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesGrid;
