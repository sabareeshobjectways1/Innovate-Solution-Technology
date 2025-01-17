import { motion } from 'framer-motion';

function Internships() {
  const internships = [
    {
      title: "Software Development",
      description: "Learn to build robust software solutions using modern technologies.",
      duration: "3-6 months"
    },
    {
      title: "Web Development",
      description: "Master front-end and back-end web development technologies.",
      duration: "3-6 months"
    },
    {
      title: "UI/UX Design",
      description: "Create beautiful and functional user interfaces.",
      duration: "3-6 months"
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications.",
      duration: "3-6 months"
    },
    {
      title: "Digital Marketing",
      description: "Learn modern digital marketing strategies and tools.",
      duration: "3-6 months"
    },
    {
      title: "DevOps",
      description: "Master DevOps practices and tools.",
      duration: "3-6 months"
    }
  ];

  return (
    <div className="min-h-screen bg-[#10171f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Internship Opportunities</h1>
          <p className="text-gray-300">
            Discover our range of internship programs tailored to tackle your career challenges and provide seamless solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e2028] rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
              <p className="text-gray-300 mb-4">{internship.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm bg-[#1e2028] px-2 py-1 rounded border border-gray-600">
                  {internship.duration}
                </span>
                <button className="bg-[#01b4db] text-white px-4 py-2 rounded hover:bg-[#0096b7] transition-colors">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e2028] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Continuous Feedback</h3>
              <p className="text-gray-300">
                Get regular feedback to recognize your strengths, enhance your skills, and foster professional growth.
              </p>
            </div>
            <div className="bg-[#1e2028] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Workshops & Seminars</h3>
              <p className="text-gray-300">
                Engage in regular sessions conducted by industry experts to stay informed about the latest trends and technologies.
              </p>
            </div>
            <div className="bg-[#1e2028] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project-Based Learning</h3>
              <p className="text-gray-300">
                Gain hands-on experience by working on live projects from start to finish, applying your knowledge to real-world industry situations.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Internships;