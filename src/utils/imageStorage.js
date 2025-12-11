import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

const COLLECTION_NAME = 'gallery_images';

export const saveImageToStorage = async (imageData) => {
  try {
    const newImage = {
      url: imageData.url,
      publicId: imageData.publicId,
      thumbnail: imageData.thumbnail,
      uploadedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newImage);
    return { id: docRef.id, ...newImage };
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
};

export const getImagesFromStorage = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('uploadedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const images = [];
    querySnapshot.forEach((doc) => {
      images.push({ id: doc.id, ...doc.data() });
    });
    return images;
  } catch (error) {
    console.error('Error getting images:', error);
    return [];
  }
};

export const deleteImageFromStorage = async (imageId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, imageId));
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};
