import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import notificationvid from "../moving.mp4";
import notificationvidmobile from "../mobilevid.mp4";

const ResponsiveBanner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[50px]">
      <div className={`relative w-full ${isMobile ? 'h-[80vh]' : 'h-[60vh]'}`}>
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500
              ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={isMobile ? notificationvidmobile : notificationvid} type="video/mp4" />
          </video>
        ) : null}

        {/* Fallback Background */}
        <div 
          className={`absolute inset-0 bg-black ${
            (!isVideoLoaded || videoError) ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        />

        {/* Desktop Layout */}
        {!isMobile && (
          <>
            {/* Left Content */}
            <div className={`
              absolute left-2.5 top-1/2 -translate-y-1/2 max-w-[300px]
              transform transition-all duration-700
              ${isVideoLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
            `}>
              <div className="bg-black/75 rounded-[30px] p-6 backdrop-blur-sm">
                <h1 className="text-3xl font-bold text-white">
                  Welcome to StealthWork
                </h1>
              </div>
            </div>

            {/* Right Content */}
            <div className={`
              absolute right-2.5 top-1/2 -translate-y-1/2 max-w-[300px]
              transform transition-all duration-700
              ${isVideoLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
            `}>
              <div className="bg-black/75 rounded-[30px] p-6 backdrop-blur-sm">
                <p className="text-sm text-gray-200 mb-4">
                  Your trusted partner for VPN solutions, software development, and
                  website consultation. Stay secure, stay connected, stay ahead.
                </p>
                <button
                  className="w-full bg-white text-black px-6 py-2 rounded-full 
                    text-lg font-semibold hover:bg-gray-200 
                    transition-colors duration-300"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className={`
            absolute bottom-6 left-4 right-4
            transform transition-all duration-700
            ${isVideoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <div className="bg-black/75 rounded-[30px] p-6 backdrop-blur-sm">
              <h1 className="text-2xl font-bold text-white mb-3">
                Welcome to StealthWork
              </h1>
              <p className="text-sm text-gray-200 mb-4">
                Your trusted partner for VPN solutions, software development, and
                website consultation. Stay secure, stay connected, stay ahead.
              </p>
              <button
                className="w-full bg-white text-black px-6 py-2 rounded-full 
                  text-lg font-semibold hover:bg-gray-200 
                  transition-colors duration-300"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveBanner;