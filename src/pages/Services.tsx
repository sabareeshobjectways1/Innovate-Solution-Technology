import { motion } from 'framer-motion';

// Define interfaces for our data types
interface Service {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface Industry {
  name: string;
  image: string;
}

function Services() {
  return (
    <div className="min-h-screen bg-[#10171f] text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01b4db]/80 to-[#ff56a8]/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive technology solutions for your business needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e2028] rounded-lg overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2028] to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.features && (
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries We Serve */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#1e2028] p-6 rounded-lg text-center relative overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 font-medium">{industry.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

const services: Service[] = [
  {
    title: "IT Consulting & Strategy",
    description: "Expert guidance to align technology with your business objectives, helping you identify opportunities for growth and streamline processes.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Software Development",
    description: "Custom applications and enterprise-grade systems designed and developed to meet your unique requirements.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud services including migration, deployment, and management to enhance scalability and reduce costs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  },
  {
    title: "Digital Marketing",
    description: "Creating engaging stories and delivering impactful results in the digital world to enhance your brand's online presence.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  },
  {
    title: "Mobile & Web Development",
    description: "Creating intuitive, user-friendly mobile and web applications that enhance user experience and drive business growth.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "API Integration",
    description: "Seamless API integration services to connect your systems, applications, and third-party services.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
  },
  {
    title: "Data Analytics & AI",
    description: "Advanced analytics and AI-powered tools to help you gain actionable insights and make smarter business decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive protection against evolving threats, including risk assessments and advanced threat detection.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Managed IT Services",
    description: "Proactive IT support and maintenance services to ensure your systems operate seamlessly.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const industries: Industry[] = [
  {
    name: "Retail & E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907"
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
  },
  {
    name: "Finance & Banking",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1"
  },
  {
    name: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  }
];

export default Services;
