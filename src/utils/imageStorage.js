const STORAGE_KEY = 'gallery_images';

export const saveImageToStorage = (imageData) => {
  try {
    const images = getImagesFromStorage();
    const newImage = {
      id: Date.now().toString(),
      url: imageData.url,
      publicId: imageData.publicId,
      thumbnail: imageData.thumbnail,
      uploadedAt: new Date().toISOString()
    };
    images.push(newImage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    return newImage;
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
};

export const getImagesFromStorage = () => {
  try {
    const images = localStorage.getItem(STORAGE_KEY);
    return images ? JSON.parse(images) : [];
  } catch (error) {
    console.error('Error getting images:', error);
    return [];
  }
};

export const deleteImageFromStorage = (imageId) => {
  try {
    const images = getImagesFromStorage();
    const filteredImages = images.filter(img => img.id !== imageId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredImages));
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};
