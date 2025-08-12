import React from 'react';

function BrowserMockup({ src, alt }) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-lg bg-white overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-50">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-4 flex-1 h-6 rounded-md bg-white border border-gray-200 text-xs text-gray-400 flex items-center px-3">
          https://project.example
        </div>
      </div>
      <div className="bg-gray-100">
        <img src={src} alt={alt} className="w-full h-72 sm:h-80 md:h-[28rem] object-cover" />
      </div>
    </div>
  );
}

function LaptopMockup({ src, alt }) {
  return (
    <div className="relative mx-auto w-full md:w-[90%]">
      <div className="rounded-t-xl border border-gray-200 shadow-lg bg-white overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-50">
          <div className="mx-auto h-3 w-24 rounded-full bg-gray-200" />
        </div>
        <div className="bg-gray-100">
          <img src={src} alt={alt} className="w-full h-64 sm:h-72 md:h-[22rem] object-cover" />
        </div>
      </div>
      <div className="mx-auto h-4 w-[85%] rounded-b-xl bg-gray-300" />
      <div className="mx-auto mt-1 h-1.5 w-[50%] rounded-full bg-gray-300" />
    </div>
  );
}

function PhoneMockup({ src, alt }) {
  return (
    <div className="relative mx-auto w-64 sm:w-72">
      <div className="rounded-[2rem] border-2 border-gray-300 shadow-lg bg-black overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/80 z-10" />
        <img src={src} alt={alt} className="w-full h-[28rem] object-cover" />
      </div>
    </div>
  );
}

export default function MockupFrame({ variant = 'browser', src, alt }) {
  if (variant === 'laptop') return <LaptopMockup src={src} alt={alt} />;
  if (variant === 'phone') return <PhoneMockup src={src} alt={alt} />;
  return <BrowserMockup src={src} alt={alt} />;
}