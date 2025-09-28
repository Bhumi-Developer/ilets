import React from 'react';

export function TestimonialCard({ name, band, content, imageQuery }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600 dark:text-gray-400">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Achieved Band {band}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        “{content}”
      </p>
    </div>
  );
}
