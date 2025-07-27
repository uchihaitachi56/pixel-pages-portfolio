const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background via-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Academic Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in Data Science and Engineering through world-class education
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 h-full opacity-30"></div>
          
          {/* IIT Mandi - Right Side */}
          <div className="relative flex items-center mb-20 animate-slide-up">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full border-4 border-background shadow-lg z-20"></div>
            
            {/* Year - Far Left */}
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                2022-2026
              </div>
            </div>
            
            {/* Content Card - Right Side */}
            <div className="w-full flex justify-end">
              <div className="w-full max-w-lg ml-auto mr-0 md:mr-8">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 group relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-lg transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                        IIT Mandi
                      </h3>
                      <p className="text-lg font-semibold text-purple-400 mb-2">B.Tech in DSE</p>
                      {/* <p className="text-sm text-muted-foreground/80 font-medium">2022 - 2026 (Expected)</p> */}
                    </div>

                    <div className="mb-6">
                      <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        CGPA: 7.90
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing Bachelor of Technology in Data Science and Engineering. Engaged in cutting-edge research and projects in machine learning, artificial intelligence, and data analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TU Darmstadt - Left Side */}
          <div className="relative flex items-center mb-20 animate-slide-up" style={{animationDelay: "0.2s"}}>
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full border-4 border-background shadow-lg z-20"></div>
            
            {/* Year - Far Right */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                2024-2025
              </div>
            </div>
            
            {/* Content Card - Left Side */}
            <div className="w-full flex justify-start">
              <div className="w-full max-w-lg mr-auto ml-0 md:ml-8">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 group relative overflow-hidden">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-xl group-hover:blur-lg transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                        TU Darmstadt, Germany
                      </h3>
                      <p className="text-lg font-semibold text-purple-400 mb-2">Semester Exchange</p>
                      {/* <p className="text-sm text-muted-foreground/80 font-medium">Sep 2024 - Mar 2025</p> */}
                    </div>

                    <div className="mb-6">
                      <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        CGPA: 8.31
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      International semester exchange program focusing on advanced computer science and engineering topics. Gained exposure to European academic standards and research methodologies while achieving excellent academic performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Senior Secondary - Right Side */}
          <div className="relative flex items-center animate-slide-up" style={{animationDelay: "0.4s"}}>
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full border-4 border-background shadow-lg z-20"></div>
            
            {/* Year - Far Left */}
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                2021-2022
              </div>
            </div>
            
            {/* Content Card - Right Side */}
            <div className="w-full flex justify-end">
              <div className="w-full max-w-lg ml-auto mr-0 md:mr-8">
                <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 group relative overflow-hidden">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-lg transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                        Senior Secondary
                      </h3>
                      <p className="text-lg font-semibold text-purple-400 mb-2">Central Board of Secondary Education</p>
                      {/* <p className="text-sm text-muted-foreground/80 font-medium">2022</p> */}
                    </div>

                    <div className="mb-6">
                      <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        96.2%
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Completed senior secondary education with outstanding academic performance, demonstrating strong foundation in fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;