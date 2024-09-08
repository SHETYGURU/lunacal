import React, { useState } from 'react';

// Replace this path with the actual path to your default placeholder image
const defaultImage = 'path_to_default_placeholder_image.jpg';

const Gallery = () => {
  const [photos, setPhotos] = useState(() => {
    const savedPhotos = localStorage.getItem('photos');
    return savedPhotos ? JSON.parse(savedPhotos) : [];
  });

  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for pagination
  const itemsPerPage = 3;

  // Add photo to the gallery
  const addPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhotos = [...photos, reader.result];
        setPhotos(newPhotos);
        localStorage.setItem('photos', JSON.stringify(newPhotos));
      };
      reader.readAsDataURL(file);
    }
  };

  // Move to the previous set of images
  const prevPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : 0));
  };

  // Move to the next set of images
  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < photos.length ? prevIndex + itemsPerPage : prevIndex
    );
  };

  // Clear all photos from the gallery and localStorage
  const clearPhotos = () => {
    setPhotos([]);
    localStorage.removeItem('photos');
  };

  // Get the current set of images to display
  const currentPhotos = photos.length
    ? photos.slice(currentIndex, currentIndex + itemsPerPage)
    : Array(itemsPerPage).fill(defaultImage); // Display default image if no photos available

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Gallery</h2>
        <div className="flex items-center space-x-2">
          {/* Add Image button with depth effect (shadow) */}
          <label className="relative bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer">
            + Add Image
            <input
              type="file"
              accept="image/*"
              onChange={addPhoto}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>

          {/* Previous button with depth effect (shadow) */}
          <button
            onClick={prevPage}
            className={`bg-gray-800 text-white p-2 rounded-lg shadow-lg ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentIndex === 0}
          >
            &#9664;
          </button>

          {/* Next button with depth effect (shadow) */}
          <button
            onClick={nextPage}
            className={`bg-gray-800 text-white p-2 rounded-lg shadow-lg ${
              currentIndex + itemsPerPage >= photos.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentIndex + itemsPerPage >= photos.length}
          >
            &#9654;
          </button>

          {/* Clear button with 50% size, transparent background, and depth effect (shadow) */}
          <button
            onClick={clearPhotos}
            className="bg-transparent text-red-600 py-1 px-2 rounded-lg shadow-lg text-sm"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Gallery items styled as non-clickable buttons */}
      <div className="grid grid-cols-3 gap-2 bg-black p-4 rounded-lg shadow-md">
        {currentPhotos.map((photo, index) => (
          <div key={index} className="bg-gray-500 h-32 rounded-lg shadow-md flex items-center justify-center">
            <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
