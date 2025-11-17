import React from 'react';
import { ImageIcon, LoadingSpinner } from './icons';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading }) => {
  return (
    <div className="relative w-full aspect-square bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center p-4">
      {/* Show placeholder only in initial state */}
      {!imageUrl && !isLoading && (
        <div className="flex flex-col items-center justify-center text-gray-500 text-center">
            <ImageIcon className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold">AI 캐릭터 생성기</h3>
            <p className="mt-2">옵션을 선택하고 버튼을 눌러<br />나만의 캐릭터를 만들어보세요!</p>
        </div>
      )}
      
      {/* Show image if it exists */}
      {imageUrl && (
        <img src={imageUrl} alt="Generated Character" className="object-cover w-full h-full rounded-lg shadow-2xl" />
      )}

      {/* Show loading overlay if loading. This covers placeholder or image */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-2xl">
          <LoadingSpinner />
          <span className="mt-4 text-lg font-semibold">이미지 생성 중...</span>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
