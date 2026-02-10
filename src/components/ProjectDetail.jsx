import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
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
    const element = document.getElementById("project-detail");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

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

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      id="project-detail"
      className="min-h-screen py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative border-4 border-green-500 rounded-2xl p-2 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-green-400 font-semibold text-lg mb-2">Project Details</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h1>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured Project
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
