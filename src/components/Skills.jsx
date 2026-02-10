import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        skills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills((prev) => ({
              ...prev,
              [skill.name]: skill.level,
            }));
          }, index * 200);
        });
      }
    }, { threshold: 0.3 });
    
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "WORDPRESS", level: 95 },
    { name: "PHP", level: 85 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
    { name: "JAVASCRIPT", level: 90 },
    { name: "SATISFACTION", level: 100 },
  ];

  const education = [
    {
      year: "2022-2024",
      title: "Diploma WordPress Development",
      institution: "Execudea Islamabad",
      description: "Learned the art of WordPress development, including theme and plugin creation, customization, and optimization. Gained hands-on experience in building dynamic websites, managing content, and ensuring responsive design. This education has equipped me with the skills to create fully functional and visually appealing WordPress sites.",
    },
    {
      year: "2021-2022",
      title: "SEO",
      institution: "IPA Karachi",
      description:
        "Learned the art of optimizing websites for search engines, including keyword research, on-page and off-page SEO techniques, and analytics to improve website visibility and ranking. Which helped me to make websites fully SEO optimized.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute to-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute to-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -transform-x-1/2 -transform-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap 16">
          {/* Left Education */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-green-400 font-semibold text-lg mb-4">
                Education
              </p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                    <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:tet-green-400 transition-all duration-300">
                      {edu.title}
                    </h3>
                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 w-[470px] text-sm leading-relaxed group-hover:text--white transition-all duration-300">
                      {edu.description}
                    </p>
                    <div></div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Progress */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Expert
              </p>
              <p className="text-4xl font-black text-white mb-8">My Skills</p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`space-y-2 transition-all duration-1000`}
                    style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1800 ease-out relative"
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                        }}>
                        <div className="absolute inset-0 bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
