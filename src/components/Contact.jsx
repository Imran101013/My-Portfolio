import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "imranuddin9990@gmail.com",
                  link: "mailto:imranuddin9990@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+923453923853",
                  link: "tel:+923453923853",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Islamabad",
                  link: null,
                },
              ].map((contact, index) => {
                const IconComponent = contact.icon;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group transform hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 200 + 300}ms` }}
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">
                        {contact.title}
                      </p>

                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="font-semibold text-white hover:text-green-400 transition-all duration-300"
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="font-semibold text-white">
                          {contact.info}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923453923853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-600/40"
            >
              <Phone className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
