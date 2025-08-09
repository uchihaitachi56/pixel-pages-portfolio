// src/components/Loader/LoaderLogo.tsx
import React, { useEffect, useState } from 'react';
import './LoaderLogo.css';

interface LoaderLogoProps {
  onComplete: () => void;
}

const LoaderLogo: React.FC<LoaderLogoProps> = ({ onComplete }) => {
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Replace with your actual name
  const firstName = "Bhavesh";
  const lastName = "Goyal";

  useEffect(() => {
    const timeline = async () => {
      // Small delay before starting
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show first name animation
      setShowFirstName(true);
      
      // Wait for first name to complete, then show last name
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowLastName(true);
      
      // Wait for both animations to complete, then fade out
      await new Promise(resolve => setTimeout(resolve, 2500));
      setFadeOut(true);
      
      // Complete the loader after fade out
      await new Promise(resolve => setTimeout(resolve, 800));
      onComplete();
    };

    timeline();
  }, [onComplete]);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated Background */}
      <div className="loader-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Signature Text */}
      <div className="signature-container">
        <div className={`signature-line ${showFirstName ? 'animate' : ''}`}>
          <span className="signature-text">
            {firstName.split('').map((letter, index) => (
              <span
                key={index}
                className="signature-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <div 
            className="signature-underline"
            style={{ animationDelay: `${firstName.length * 0.1}s` }}
          ></div>
        </div>

        <div className={`signature-line ${showLastName ? 'animate' : ''}`}>
          <span className="signature-text">
            {lastName.split('').map((letter, index) => (
              <span
                key={index}
                className="signature-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <div 
            className="signature-underline"
            style={{ animationDelay: `${lastName.length * 0.1}s` }}
          ></div>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="loading-indicator">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};

export default LoaderLogo;