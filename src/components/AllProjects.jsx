import { Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();
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
    const element = document.getElementById("all-projects");
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
      title: "Chang Thai Lisbon",
      description:
        "I designed and developed a responsive WordPress website using Elementor. I created a service listing, contact page with form, social media links, and embedded location map. The site now serves as a digital front for their spa, increasing booking inquiries and improving customer experience significantly.",
      image: "/src/assets/changthailisbon.pt.png",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 2,
      title: "Pak Adventure.com - Tour & Travel Agency Website",
      description:
        "The client at Pak Adventure, a leading travel agency in Pakistan, needed a user-friendly website to promote tourism packages, provide travel details, and collect booking inquiries from local and international tourists. I designed and developed the website using WordPress and Elementor. Features include a responsive tour grid, dynamic image galleries, sticky navigation, and inquiry forms. I also added WhatsApp chat integration for direct bookings. The new website has significantly enhanced Pak Adventure's online presence, making it easier for customers to explore travel options and book tours, ultimately driving more business and increasing customer engagement.",
      image: "/src/assets/wordpress theme customization.png",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 3,
      title: "Pak Adventure.pk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati soluta dignissimos recusandae aliquam eligendi illum quisquam cumque omnis commodi impedit quos fuga culpa, iusto tempora?",
      image: "/src/assets/pakadventure.pk_.png",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 4,
      title: "Resource Future - Energy Consulting Website",
      description:
        "ResourcesFuture.com is a business-focused website for a company offering services in the energy, mining, and resource development sectors. The client wanted a clean, professional online presence that clearly communicated their expertise and areas of operation. I designed and developed the site using WordPress and Elementor, creating a modern layout with a custom homepage, services section, team bios, and a contact form. The site is fully responsive and optimized for SEO, helping ResourcesFuture.com establish credibility and attract new clients in their industry.",
      image: "/src/assets/resourcesfuture.com_.png",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 5,
      title: "UXL POS",
      description:
        "I completely redesigned and developed the new site using WordPress and Elementor, giving it a clean, high-tech layout that highlights key offerings. I integrated a Calendly “Request a Free Demo” link, built a clear features section, added social links, and optimized the site for speed and SEO. The revamped site now effectively showcases UXL POS's solutions, driving more demo requests and enhancing their online presence.",
      image: "/src/assets/uxlpos.webp",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 6,
      title: "The Eastern Law Firm – Legal Services Website",
      description:
        "I designed and developed a modern WordPress site with Elementor. The layout includes a custom homepage, services section, lawyer bios, FAQs, and a secure contact form. SEO best practices were followed to enhance visibility on search engines. The firm now has a powerful digital presence, giving clients confidence and making legal services more accessible. The website has helped generate new client leads and establish the firm’s credibility online.",
      image: "/src/assets/theeasternlawfirm.com_.png",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 7,
      title: "K2 Xtreme – High-Altitude Adventure Marathon Website",
      description:
        "I designed and developed a dynamic WordPress site using Elementor for K2 Xtreme, an extreme marathon event held at high altitudes. The website features a bold, adventurous design with custom graphics, a countdown timer, registration forms, and an interactive course map. I also integrated social media feeds and optimized the site for mobile devices. The new website has significantly boosted event registrations and engagement by providing an immersive online experience that captures the spirit of the marathon.",
      image: "/src/assets/k2xtreme.webp",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 8,
      title: "Summit Embassy – Hotel & Booking Website",
      description:
        "SummitEmbassy.com is a website developed for a hotel that offers comfortable and premium stays to travelers. The client wanted a professional, clean website that showcases their rooms, amenities, location, and allows guests to make booking inquiries easily. I developed the website in WordPress using Elementor. It includes sections for room listings, photo galleries, services, customer testimonials, and a contact/booking form. I also added Google Maps and WhatsApp chat integration.",
      image: "/src/assets/summitembassy.webp",
      technologies: ["Wordpress", "HTML", "PHP", "CSS", "JavaScript"],
      featured: false,
    },
  ];

  return (
    <section
      id="all-projects"
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
            All Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are all my projects that showcase my skills and expertise.
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
                <div className="p-4 cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
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

export default AllProjects;
