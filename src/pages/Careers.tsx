import { motion } from 'framer-motion';

function Careers() {
  const positions = [
    {
      title: "AWS Intern",
      type: "Internship",
      location: "Madurai",
      description: "Join our cloud team and gain hands-on experience with AWS technologies."
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Madurai",
      description: "Looking for experienced full stack developers to join our growing team."
    },
    {
      title: "Web & Mobile App Developer",
      type: "Full-time",
      location: "Madurai",
      description: "Create innovative web and mobile applications for our clients."
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Madurai",
      description: "2-3 years experience in digital marketing required."
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
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-300">
            A career with Innovate Solution Technology offers an exciting blend of variety, depth, and diverse experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e2028] rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
              <div className="flex gap-4 mb-4">
                <span className="text-sm bg-[#01b4db] px-2 py-1 rounded">{position.type}</span>
                <span className="text-sm bg-[#1e2028] px-2 py-1 rounded border border-gray-600">{position.location}</span>
              </div>
              <p className="text-gray-300 mb-4">{position.description}</p>
              <button className="bg-[#01b4db] text-white px-4 py-2 rounded hover:bg-[#0096b7] transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;