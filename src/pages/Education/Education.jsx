import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Calendar,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Sikkim Manipal University",
      mascot: "data:image/png;base64,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",
      year: "2024-2026",
      achievements: ["GPA: 8.9"],
      skills: ["C#","C++","Java", "Python", "Cloud", ".NET", "Web Development" ],
      description:
      "Specialized in computer science and IT, with a focus on software development, Python programming, database management, operating systems, and DevOps practices."
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      school: "Berhampur University",
      mascot: "https://buodisha.edu.in/wp-content/uploads/2023/08/logo-first.png",
      year: "2016-2020",
      achievements: ["GPA: 4.25"],
      skills: ["Accounting", "Business Law", "Income Tax & Auditing","BSM"],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    {/* <span className="text-3xl">{edu.mascot}</span> */}
                    <span className="text-3xl"><img src={edu.mascot} alt="mascot" className="w-8 h-8 object-contain"/></span>

                   
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                {/* <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
