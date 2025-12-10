import { useState } from 'react';

const ImageCard = ({ imageUrl, onDelete, showDelete = false }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
      onMouseEnter={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <img
        src={imageUrl}
        alt="Gallery"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {showDelete && showDeleteBtn && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ImageCard;
