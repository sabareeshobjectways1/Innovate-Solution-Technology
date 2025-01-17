import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

function Home() {
  const servicesControls = useAnimationControls();
  const techControls = useAnimationControls();

  useEffect(() => {
    const startServiceScroll = async () => {
      while (true) {
        await servicesControls.start({
          x: [0, -2000],
          transition: { duration: 20, ease: "linear" }
        });
        await servicesControls.set({ x: 0 });
      }
    };

    const startTechScroll = async () => {
      while (true) {
        await techControls.start({
          x: [0, -1500],
          transition: { duration: 15, ease: "linear" }
        });
        await techControls.set({ x: 0 });
      }
    };

    startServiceScroll();
    startTechScroll();
  }, []);

  return (
    <div className="min-h-screen bg-[#10171f] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#01b4db]/20 to-[#ff56a8]/20 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20" 
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-transparent bg-clip-text">
              Innovating from Imagination
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Your Trusted Partner in IT Excellence
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-[#1e2028] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-transparent bg-clip-text"
          >
            Our Core Services
          </motion.h2>
          <motion.div 
            animate={servicesControls}
            className="flex gap-8 mb-8"
            style={{ width: "4000px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#10171f] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-w-[300px]"
              >
                <div className="h-12 w-12 mb-4 rounded-full bg-gradient-to-r from-[#01b4db] to-[#ff56a8] p-2 flex items-center justify-center">
                  <img src={service.icon} alt={service.title} className="h-8 w-8 invert" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-transparent bg-clip-text"
          >
            Technologies We Master
          </motion.h2>
          <motion.div 
            animate={techControls}
            className="flex gap-8"
            style={{ width: "3000px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-[#1e2028] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all min-w-[150px]"
              >
                <img src={tech.image} alt={tech.name} className="h-16 w-16 mx-auto mb-4 invert" />
                <p className="text-center text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-16 bg-[#1e2028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-transparent bg-clip-text"
          >
            Internship Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-[#10171f] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={internship.image} alt={internship.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                  <p className="text-gray-400 mb-4">{internship.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#01b4db]">{internship.duration}</span>
                    <motion.a 
                      href="/internships" 
                      className="text-[#ff56a8] hover:text-[#ff56a8]/80"
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-transparent bg-clip-text"
          >
            Career Opportunities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1e2028] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                <p className="text-gray-400 mb-4">{career.description}</p>
                <div className="flex gap-4">
                  <span className="text-sm bg-[#01b4db]/20 text-[#01b4db] px-3 py-1 rounded-full">
                    {career.type}
                  </span>
                  <span className="text-sm bg-[#ff56a8]/20 text-[#ff56a8] px-3 py-1 rounded-full">
                    {career.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.a
              href="/careers"
              className="inline-block bg-gradient-to-r from-[#01b4db] to-[#ff56a8] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Positions
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01b4db] to-[#ff56a8] opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="CTA Background" 
            className="w-full h-full object-cover mix-blend-multiply opacity-20" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Let's work together to bring your vision to life.</p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-[#01b4db] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "IT Consulting",
    description: "Expert guidance to align technology with your business objectives.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/refs/heads/develop/icons/consul.svg"
  },
  {
    title: "Software Development",
    description: "Custom, scalable software solutions tailored to your needs.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/refs/heads/develop/icons/devdotto.svg"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless cloud migration, deployment, and management.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/refs/heads/develop/icons/cloudflare.svg"
  },
  {
    title: "Digital Transformation",
    description: "Empowering businesses with automation and innovation.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/digitalocean.svg"
  },
  {
    title: "Data Analytics and AI",
    description: "Actionable insights and intelligent solutions for growth.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tensorflow.svg"
  },
  {
    title: "Web & Mobile Development",
    description: "User-friendly websites and mobile apps to enhance engagement.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive protection against evolving threats.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/shield.svg"
  },
  {
    title: "Managed IT Services",
    description: "Proactive IT support for smooth operations and reliability.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/serverfault.svg"
  }
];

const technologies = [
  { 
    name: 'React', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg'
  },
  { 
    name: 'Node.js', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg'
  },
  { 
    name: 'Python', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg'
  },
  { 
    name: 'AWS', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg'
  },
  { 
    name: 'Docker', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg'
  },
  { 
    name: 'Kubernetes', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg'
  },
  { 
    name: 'Android', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/android.svg'
  },
  { 
    name: 'iOS', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ios.svg'
  },
  { 
    name: 'Flutter', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/flutter.svg'
  },
  { 
    name: 'Angular', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/angular.svg'
  },
  { 
    name: 'Vue.js', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vuedotjs.svg'
  },
  { 
    name: 'TypeScript', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg'
  },
  { 
    name: 'MongoDB', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg'
  },
  { 
    name: 'PostgreSQL', 
    image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg'
  }
];

const internships = [
  {
    title: "Software Development",
    description: "Learn to build robust software solutions using modern technologies.",
    duration: "3-6 months",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80"
  },
  {
    title: "UI/UX Design",
    description: "Master the art of creating beautiful and functional user interfaces.",
    duration: "3-6 months",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  },
  {
    title: "Cloud Computing",
    description: "Get hands-on experience with cloud technologies and DevOps practices.",
    duration: "3-6 months",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  }
];

const careers = [
  {
    title: "Senior Software Engineer",
    description: "Lead development of innovative software solutions.",
    type: "Full-time",
    location: "Madurai"
  },
  {
    title: "UX Designer",
    description: "Create exceptional user experiences for our products.",
    type: "Full-time",
    location: "Madurai"
  },
  {
    title: "Cloud Architect",
    description: "Design and implement scalable cloud solutions.",
    type: "Full-time",
    location: "Madurai"
  },
  {
    title: "DevOps Engineer",
    description: "Streamline our development and deployment processes.",
    type: "Full-time",
    location: "Madurai"
  }
];

export default Home;