import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by John Doe
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
        
        {/* Animated gradient line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;