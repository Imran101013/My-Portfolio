import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className=" py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute to-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute to-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -transform-x-1/2 -transform-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-space">
            {/* Left Image */}
            <div
              className={`relative transition-all duration-1000 mt-12 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}>
              <div className="relative group">
                <div className="w-full mx-w-md mx-auto">
                  <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                    <img
                      src="\src\assets\about us.png"
                      alt=""
                      className="w-full rounded transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/*Floating Decoration */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}>
              <div className="space-y-4">
                <p className="text-green-400 font-semibold text-lg">About Us</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white animate-slide-up">
                  Why Hire me For Your <br />
                  <span>next Project</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">
                  WordPress Developer
                </p>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className={`text-lg transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}>
                  I’m a passionate WordPress Developer specializing in Elementor, PHP, CSS, JavaScript, and HTML. I create modern, responsive, and user-friendly websites tailored to your business goals. Whether you need a new website, a redesign, theme customization, or bug fixing, I deliver clean, functional, and visually appealing solutions that make your online presence stand out.
                </p>
              
              </div>
              <div
                className={`grid grid-cols-3 gap-8 py-6 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Name:
                  </p>
                  <p className="text-gray-300">Imran Uddin</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Location:
                  </p>
                  <p className="text-gray-300">Islamabad</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Email:
                  </p>
                  <p className="text-gray-300">imranuddin9990@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
