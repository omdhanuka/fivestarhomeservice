export const uploadToCloudinary = async (file) => {
  // Debug: Check environment variables
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  
  console.log('Cloudinary Config:', { cloudName, uploadPreset });
  
  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary configuration is missing. Check your .env file.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', 'gallery');

  try {
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    console.log('Uploading to:', uploadUrl);
    
    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cloudinary error response:', data);
      throw new Error(data.error?.message || 'Upload failed');
    }

    console.log('Upload successful:', data);
    
    return {
      url: data.secure_url,
      publicId: data.public_id,
      thumbnail: data.eager?.[0]?.secure_url || data.secure_url
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    // Note: For security, delete operations should be done from backend
    // This is a placeholder - implement backend API for deletion
    const response = await fetch('/api/delete-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicId })
    });

    if (!response.ok) {
      throw new Error('Delete failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw error;
  }
};

export const getAllImages = async () => {
  try {
    // Fetch images from your backend or database
    const response = await fetch('/api/get-images');
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch images error:', error);
    return [];
  }
};
