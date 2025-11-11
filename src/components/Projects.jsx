import { Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
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
    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setZoomLevel(1); // Reset zoom level when closing modal
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 7)); // Max zoom 3x
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5)); // Min zoom 0.5x
  };

  const projects = [
    {
      id: 1,
      title: "AILegend Online",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/ailegendonline.com_.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: false,
    },
    {
      id: 2,
      title: "Chang Thai Lisbon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/changthailisbon.pt.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: true,
    },
    {
      id: 3,
      title: "Green Nature",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/demo.webdesigns.pk.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: false,
    },
    {
      id: 4,
      title: "Pak Adventure.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/pakadventure.com_.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: true,
    },
    {
      id: 5,
      title: "Pak Adventure.pk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/pakadventure.pk_.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: true,
    },
    {
      id: 6,
      title: "Resource Future",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/resourcesfuture.com_.png",
      technologies: ["Wordpress", "PHP", "CSS"],
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute to-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute to-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -transform-x-1/2 -transform-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <p className="text-green-400 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-70 object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => openImageModal(project.image)}
                      className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300"
                      aria-label="View full image">
                      <Maximize2 className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3"></div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => {
                      return (
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`text-center transition-all duration-1000 delay-1000 mt-5 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title">
          <div className="relative max-w-7xl max-h-[90vh]">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close image viewer">
              <X className="w-8 h-8" />
            </button>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 z-[60]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                aria-label="Zoom out">
                -
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                aria-label="Zoom in">
                +
              </button>
            </div>
            <div className="overflow-auto max-h-[90vh] max-w-full">
              <img
                src={selectedImage}
                alt="Project full view"
                className="object-contain rounded-lg"
                style={{
                  transform: `scale(${zoomLevel})`,
                  maxWidth: "100%",
                  height: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
