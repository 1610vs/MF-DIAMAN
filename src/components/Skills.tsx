import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 60 },
      { name: 'Figma', level: 85 },
      { name: 'CI/CD', level: 68 },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'Next.js', 'Vue.js', 'Node.js',
  'Tailwind', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'GraphQL', 'Redis', 'Git', 'Figma', 'Vite',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Навыки</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Мой <span className="gradient-text">стек</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Технологии и инструменты, с которыми я работаю ежедневно
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className="p-6 rounded-2xl bg-bg-secondary border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-6 text-text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span className="text-sm text-accent font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-bg-primary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6 text-text-secondary">Технологический радар</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                className="px-4 py-2 rounded-xl bg-bg-secondary border border-border/50 text-text-secondary text-sm hover:border-accent/50 hover:text-accent transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
