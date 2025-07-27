import { useEffect, useState } from "react";

interface SignatureIntroProps {
  onComplete: () => void;
}

const SignatureIntro = ({ onComplete }: SignatureIntroProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Complete animation after 4 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      // Wait a bit more then call onComplete
      setTimeout(onComplete, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-secondary/30 to-background flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Signature SVG Animation */}
        <div className="mb-8">
          <svg
            width="400"
            height="150"
            viewBox="0 0 400 150"
            className="signature-svg"
            style={{ filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))' }}
          >
            {/* Bhavesh */}
            <path
              d="M20 80 Q30 60, 50 80 Q60 90, 70 75 Q75 65, 85 80 L85 95 Q90 105, 100 95 L100 65 Q105 55, 115 75 L115 95"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="signature-path"
              style={{ strokeDasharray: '200', strokeDashoffset: '200' }}
            />
            
            {/* Goyal */}
            <path
              d="M140 75 Q150 55, 170 75 Q180 85, 190 70 L200 85 Q210 95, 220 85 L220 65 Q225 55, 235 75 Q245 85, 255 75 L270 95"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="signature-path"
              style={{ strokeDasharray: '180', strokeDashoffset: '180', animationDelay: '1.5s' }}
            />

            {/* Decorative underline */}
            <path
              d="M20 110 Q100 105, 180 110 Q220 112, 270 110"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="signature-path"
              style={{ strokeDasharray: '250', strokeDashoffset: '250', animationDelay: '3s' }}
            />
          </svg>
        </div>

        {/* Text that appears after signature */}
        <div className={`transition-all duration-1000 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Bhavesh Goyal
          </h1>
          <p className="text-muted-foreground">Welcome to my portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default SignatureIntro;