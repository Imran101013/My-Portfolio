import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );
    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");

    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      company: "uExel Solutions",
      position: "WordPress Developer",
      period: "Jan 2024-Present",
      location: "Islamabad, PK",
      description:
        "As a WordPress Developer at uExel Solutions, I am responsible for designing, developing, and maintaining WordPress websites for a diverse range of clients. My role involves customizing themes and plugins to meet specific client requirements, ensuring responsive design for optimal user experience across devices, and implementing SEO best practices to enhance site visibility. I collaborate closely with clients to understand their needs and deliver tailored solutions that drive business growth. Additionally, I manage website performance, security, and updates to ensure seamless functionality and a positive user experience.",
      achievements: [
        "Successfully launched over 20 WordPress websites for clients across various industries, resulting in increased online presence and customer engagement.",
        "Implemented custom themes and plugins that enhanced website functionality, leading to a 30% increase in client satisfaction.",
        "Optimized website performance and SEO, resulting in a 25% increase in organic traffic for client sites.",

      ],
      skills: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS","HTML", "SEO"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute to-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute to-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -transform-x-1/2 -transform-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-lg mb-4">
            All Company
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
            {" "}
            My Professional journey and that shaped my expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Animate Timeline */}
            <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`w-full  bg-gradient-to-b from-green-500 via-green-400 t0-green-300 rounded-full transition-all duration-200 ease-out`}>
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            </div>
            {experience.map((exp, index) => {
              return (
                <div
                  key={index}
                  className={`experience-item relative flex items-center mb-20 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-100 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-100"
                  }`}
                  data-index={index}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : index % 2 === 0
                      ? "translateX(-50px) translateY(20px)"
                      : "translateX(50px) translateY(20px)",
                  }}>
                  {/* Animated Timeline Dots */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${
                      visibleItems.includes(index) ? "scale-110" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 300 + 1200}ms` }}>
                    <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                  </div>
                  {/* content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                    <div
                      className={`bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-1000 delay-300 transform hover:scale-105 hover:shadow-red-500/20 group`}>
                      <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Positions */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-400 transition-colors duration-300">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                        {exp.description}
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-green-400 transition-all duration-300">
                          <Award className="w-4 h-4 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achv, achindex) => {
                            return (
                              <li
                                key={achindex}
                                className={`text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all duration-300`}
                                style={{
                                  animationDelay: `${
                                    index * 300 + achindex * 200 + 1500
                                  }ms`,
                                }}>
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                {achv}
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillindex) => {
                          return (
                            <span
                              key={skillindex}
                              className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400"
                              style={{
                                animationDelay: `${
                                  index * 300 + skillindex * 100 + 1800
                                }ms`,
                              }}>
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
