import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import ImageCard from '../components/ImageCard';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const imagesRef = ref(storage, 'gallery');
      const result = await listAll(imagesRef);
      
      const urls = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );
      
      setImages(urls);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our recent repair work and satisfied customers
          </p>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images uploaded yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imageUrl, index) => (
              <ImageCard key={index} imageUrl={imageUrl} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
