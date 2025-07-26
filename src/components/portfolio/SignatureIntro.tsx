import { useEffect, useState } from "react";

const SignatureIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content immediately
    setShowContent(true);
    
    // Transition to main portfolio after 3 seconds
    const timer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {showContent && (
          <>
            <h1 className="text-6xl font-bold text-blue-600 mb-4">
              Your Name
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Welcome to my portfolio
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <div className="w-2 h-2 bg-blue-600 rounded-full mx-2" />
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignatureIntro;