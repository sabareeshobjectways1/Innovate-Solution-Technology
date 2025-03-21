import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen bg-[#10171f] text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01b4db]/80 to-[#ff56a8]/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Innovating solutions for tomorrow's challenges
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-8">About Us</h1>
              <p className="text-lg text-gray-300 mb-6">
                Welcome to Inovating  Solution Technology, where innovation meets excellence! We are a forward-thinking service-based company dedicated to delivering cutting-edge technology solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-300">
                At Inovating  Solution Technology, we believe in harnessing the power of technology to drive transformation and empower businesses. Our team of skilled professionals specializes in providing scalable, efficient, and cost-effective solutions across various domains.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e2028] p-8 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Mission"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-4 text-gray-300">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#01b4db] mr-2">•</span>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e2028] p-8 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Vision"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <ul className="space-y-4 text-gray-300">
                {visions.map((vision, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#ff56a8] mr-2">•</span>
                    {vision}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Board of Directors</h2>
          <div className="bg-[#1e2028] rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Leadership"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2">Ms. B. SHALINI</h3>
              <p className="text-gray-300">Director</p>
            </div>
          </div>
        </motion.section>

        {/* Office Location */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Office</h2>
          <div className="bg-[#1e2028] rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Office"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative z-10">
              <p className="text-gray-300">
                Jankit Nagar B Zone<br />
                Kadachanenthal, Madurai<br />
                Phone: <a href="tel:7708255161" className="text-[#01b4db]">7708255161</a>
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

const missions = [
  "To deliver innovative and reliable technology solutions that help businesses thrive in a dynamic and competitive world.",
  "To empower organizations by leveraging the latest advancements in technology, ensuring long-term growth and sustainability.",
  "To build enduring partnerships by consistently exceeding client expectations through quality, innovation, and integrity.",
  "To drive economic and social value through ethical business practices and technology-driven solutions."
];

const visions = [
  "To be a trusted global leader in technology services, setting benchmarks for excellence and innovation.",
  "To foster a culture of continuous learning, creativity, and adaptation to future technologies.",
  "To make a positive impact on industries and communities through technology that simplifies, enhances, and transforms lives.",
  "To inspire and lead the next wave of technological advancements that shape a smarter, more connected world."
];

export default About;