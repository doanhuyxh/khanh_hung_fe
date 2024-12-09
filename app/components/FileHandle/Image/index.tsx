'use client'

import React, { useState } from 'react';

interface ImageUploadProps {
  initialLink: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ initialLink = "", onChange }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialLink);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
    setImageUrl(value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh thumbnail</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <div className="mb-2">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Uploaded Thumbnail"
              className="mx-auto h-auto w-4/5 max-h-48 object-contain" // Chiếm 80% chiều rộng vùng hiển thị
            />
          ) : (
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="text-sm text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
            <span>Tải ảnh lên</span>
            <input type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={imageUrl || ""}
            onChange={handleLinkChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Hoặc dán đường dẫn ảnh tại đây"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;