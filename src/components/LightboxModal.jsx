import React from 'react';
import { X } from 'lucide-react';

export const LightboxModal = ({ isOpen, image, caption, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-amber-400 text-2xl p-2 focus:outline-none transition-colors"
        >
          <X className="w-7 h-7" />
        </button>
        <img
          src={image}
          alt={caption || 'Enlarged photo'}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-neutral-800 shadow-2xl"
        />
        {caption && (
          <p className="text-amber-300 font-serif text-sm sm:text-base mt-4 text-center">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
