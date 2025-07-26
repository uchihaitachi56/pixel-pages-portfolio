const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Portfolio</h1>
          <p className="text-lg text-gray-600">Welcome to your professional portfolio</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600">Brief introduction about yourself</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <p className="text-gray-600">Your technical skills and expertise</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Projects</h3>
            <p className="text-gray-600">Showcase of your work and projects</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <p className="text-gray-600">Your professional experience</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-600">Your educational background</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-600">Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
