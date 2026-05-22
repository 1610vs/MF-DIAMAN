import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, GitBranch, Eye } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    demo: '#',
    code: '#',
    views: '1.2K',
  },
  {
    title: 'Task Manager App',
    description: 'Приложение для управления задачами с drag-and-drop, тегами и совместной работой.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    demo: '#',
    code: '#',
    views: '856',
  },
  {
    title: 'AI Chat Interface',
    description: 'Интерфейс для взаимодействия с AI-моделями с поддержкой markdown и истории чатов.',
    tags: ['React', 'OpenAI API', 'Vite', 'Framer Motion'],
    image: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    demo: '#',
    code: '#',
    views: '2.1K',
  },
  {
    title: 'Portfolio Generator',
    description: 'Инструмент для генерации портфолио-сайтов на основе данных пользователя.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    demo: '#',
    code: '#',
    views: '643',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Интерактивная панель аналитики с графиками, фильтрами и экспортом отчётов.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20',
    demo: '#',
    code: '#',
    views: '1.5K',
  },
  {
    title: 'Social Media App',
    description: 'Мини-социальная сеть с лентой, лайками, комментариями и уведомлениями.',
    tags: ['React Native', 'GraphQL', 'AWS', 'Redis'],
    image: 'bg-gradient-to-br from-rose-500/20 to-orange-500/20',
    demo: '#',
    code: '#',
    views: '3.2K',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Портфолио</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Мои <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Коллекция проектов, над которыми я работал. Каждый проект — это возможность 
            изучить что-то новое и создать что-то полезное.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl bg-bg-secondary border border-border/50 overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/80">{project.title[0]}</span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 backdrop-blur text-xs text-white/80">
                  <Eye className="w-3 h-3" />
                  {project.views}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Демо
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-text-secondary text-sm font-medium hover:border-accent/50 hover:text-accent transition-all"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    Код
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
