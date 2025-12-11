import { useEffect, useState } from 'react';
import { getImagesFromStorage } from '../utils/imageStorage';
import ImageCard from '../components/ImageCard';

const CACHE_KEY = 'gallery_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Check cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setImages(data);
            setLoading(false);
            return;
          }
        }

        // Fetch from Firestore
        const storedImages = await getImagesFromStorage();
        setImages(storedImages);
        
        // Update cache
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          data: storedImages,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects and completed work
          </p>
        </div>

        {/* Gallery Content */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No images in gallery yet</p>
            <p className="text-gray-400">
              Check back soon for updates on our amazing projects!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <ImageCard key={image.id} imageUrl={image.url} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
