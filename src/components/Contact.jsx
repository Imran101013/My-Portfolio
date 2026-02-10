
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {

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
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute to-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute to-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -transform-x-1/2 -transform-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interestedd in new opportunities and exciting
              projects.Whether you have a question or just want to say hi, I'll
              try my best to get back to you.
            </p>
            <div className="space-y-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "imranuddin9990@gmail.com",
                },
                { icon: Phone, 
                  title: "Phone", 
                  info: "+923453923853" 
                },
                { icon: MapPin, 
                  title: "Location", 
                  info: "Islamabad" 
                },
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={index}
                    className={`flex item-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">
                        {contact.title}
                      </p>
                      <p className="font-semibold text-white group-hover:text-gray-200 transition-all duration-300">
                        {contact.info}{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className={`pt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, index) => {
                  return (
                    <a
                      className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700 hovr:border-green-500 hover:scale-110 hover:rotate-6 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      <Icon className="text-white w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bol text-white mb-6">
                Send Message
              </h3>
              <form>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block ext-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Full Name
                    </label>
                    <input type="text" id="email" name="email" className="w-full bg-slate-7800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Your Name" required/>
                  </div>
                   <div className="group">
                    <label className="block ext-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Email Address
                    </label>
                    <input type="text" id="name" name="name" className="w-full bg-slate-7800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Your Email" required/>
                  </div>
                </div>

                <div className="group mt-5">
                  <label className="block ext-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Subject
                    </label>
                    <input type="text" id="name" name="name" className="w-full bg-slate-7800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Project Description" required/>
                </div>
                <div className="group mt-5">
                  <label className="block ext-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">
                      Message
                    </label>
                    <textarea type="text" id="name" name="name" className="w-full bg-slate-7800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 resize-none" placeholder="Tell me About Your Project" required/>
                </div>
                <button className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group">Send Message
                  <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
