'use client'

import { postFormData } from '@/app/configs/axiosConfig';
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  initialLink: string;
  onChange: (value: string) => void;
}

const ImageUploadUser: React.FC<ImageUploadProps> = ({ initialLink = "", onChange }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialLink);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const debounceTimeout = 300; // 300ms delay
    onChange(value);
    clearTimeout((handleLinkChange as any).timeout);
    (handleLinkChange as any).timeout = setTimeout(() => {
      
      setImageUrl(value);
    }, debounceTimeout);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const res = await postFormData('/upload/img', { file: file });
      setImageUrl(res.data.file_strong_url)
      onChange(res.data.file_strong_url)
    }
  };

  return (
    <div className="border-2 border-dashed border-color-primary rounded-3xl p-4 text-center w-[24rem] h-[23rem] flex flex-col justify-between">
      <label className="flex-1 flex items-center justify-center" htmlFor='file'>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Nhập đúng đường link ảnh"
            width={400}
            height={300}
            className="max-h-48 w-auto object-contain"
            unoptimized={imageUrl.startsWith('data:')}
          />
        ) : (
          <svg className="h-20 w-20 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </label>
      <div className="space-y-4">
        <div className="text-lg text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
            <span>Tải ảnh lên</span>
            <input id='file' type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
        <div>
          <input
            type="text"
            hidden
            value={imageUrl || ""}
            onChange={handleLinkChange}
            className="w-full p-5 border border-gray-300 rounded-md"
            placeholder="Hoặc dán đường dẫn ảnh tại đây"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUploadUser;
