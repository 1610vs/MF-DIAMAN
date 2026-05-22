import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';

const stats = [
  { label: 'Лет опыта', value: '5+' },
  { label: 'Завершённых проектов', value: '50+' },
  { label: 'Довольных клиентов', value: '30+' },
  { label: 'Строк кода', value: '100K+' },
];

const infoItems = [
  { icon: User, label: 'Имя', value: 'Алексей Петров' },
  { icon: MapPin, label: 'Локация', value: 'Москва, Россия' },
  { icon: Calendar, label: 'Опыт', value: '5+ лет' },
  { icon: GraduationCap, label: 'Образование', value: 'ВШЭ, Computer Science' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Обо мне</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Кто я <span className="gradient-text">такой</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Я увлечённый разработчик, который любит создавать красивые и функциональные веб-приложения.
            Моя цель — писать чистый код и создавать продукты, которыми люди любят пользоваться.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-5xl font-bold text-white">
                    АП
                  </div>
                  <p className="text-text-muted text-sm">Ваше фото здесь</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent">5+</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-bg-secondary border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-accent mb-2" />
                  <p className="text-text-muted text-xs">{item.label}</p>
                  <p className="text-text-primary font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-bg-secondary border border-border/50">
              <h3 className="text-lg font-semibold mb-3">Моя история</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Начал свой путь в веб-разработке 5 лет назад с простых HTML-страниц. 
                С тех пор я погрузился в экосистему React, освоил TypeScript, 
                изучил современные подходы к UI/UX дизайну. Сегодня я создаю 
                масштабируемые приложения для стартапов и крупных компаний.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center p-6 rounded-xl bg-bg-secondary border border-border/50"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
