import { motion } from 'framer-motion';

function Technologies() {
  const technologies = [
    { name: 'AWS', image: '/aws.png' },
    { name: 'MongoDB', image: '/mongodb.png' },
    { name: 'MySQL', image: '/mysql.png' },
    { name: 'PHP', image: '/php.png' },
    { name: 'Laravel', image: '/laravel.png' }
  ];

  return (
    <div className="min-h-screen bg-[#10171f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Technologies We Use
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e2028] p-6 rounded-lg flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img src={tech.image} alt={tech.name} className="max-w-full max-h-full" />
              </div>
              <h3 className="text-xl font-semibold text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;