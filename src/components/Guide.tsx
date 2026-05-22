import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Lightbulb,
  Palette,
  Code2,
  FileCode,
  Rocket,
  Share2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
} from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  code?: string;
  tips: string[];
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Планирование и структура',
    description: 'Определите цель портфолио и спланируйте его структуру.',
    icon: Lightbulb,
    details: [
      'Определите целевую аудиторию (рекрутеры, клиенты, коллеги)',
      'Выберите ключевые секции: Hero, О себе, Проекты, Навыки, Контакты',
      'Подготовьте контент: тексты, фото, ссылки на проекты',
      'Создайте mind-map или простой wireframe на бумаге',
      'Решите, будет ли сайт одностраничным или многостраничным',
    ],
    tips: [
      'Начните с простого — лучше запустить минимальную версию, чем откладывать',
      'Соберите все материалы в одну папку перед началом разработки',
      'Изучите 5-10 портфолио разработчиков для вдохновения',
    ],
  },
  {
    number: 2,
    title: 'Дизайн и прототип',
    description: 'Создайте визуальный дизайн вашего портфолио.',
    icon: Palette,
    details: [
      'Выберите цветовую палитру (1-2 основных цвета + нейтральные)',
      'Подберите шрифты: 1 для заголовков, 1 для текста',
      'Создайте дизайн-систему: отступы, скругления, тени',
      'Нарисуйте макеты в Figma (достаточно 3-4 экранов)',
      'Продумайте адаптивность под мобильные устройства',
    ],
    code: `/* Пример цветовой схемы в Tailwind */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-bg: #0f172a;
  --color-text: #f1f5f9;
}`,
    tips: [
      'Используйте готовые UI-киты как основу, а не рисуйте с нуля',
      'Сделайте тёмную и светлую тему — это выглядит профессионально',
      'Проверьте контрастность текста — он должен быть читаемым',
    ],
  },
  {
    number: 3,
    title: 'Настройка проекта',
    description: 'Инициализируйте проект и настройте окружение.',
    icon: Code2,
    details: [
      'Установите Node.js LTS версии (рекомендуется через nvm)',
      'Создайте проект: npm create vite@latest my-portfolio -- --template react-ts',
      'Установите Tailwind CSS и настройте конфигурацию',
      'Добавьте полезные библиотеки: framer-motion, lucide-react',
      'Настройте ESLint и Prettier для чистого кода',
    ],
    code: `# Создание проекта
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# Установка зависимостей
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Полезные библиотеки
npm install framer-motion lucide-react`,
    tips: [
      'Используйте TypeScript — это покажет ваш профессионализм',
      'Настройте алиасы путей (@/components) для удобства импортов',
      'Сразу настройте git-репозиторий и сделайте первый коммит',
    ],
  },
  {
    number: 4,
    title: 'Разработка компонентов',
    description: 'Создайте переиспользуемые компоненты и страницы.',
    icon: FileCode,
    details: [
      'Создайте базовые компоненты: Header, Footer, Button, Card',
      'Реализуйте навигацию с плавной прокруткой к секциям',
      'Создайте секции: Hero, About, Projects, Skills, Contact',
      'Добавьте анимации появления при скролле (Framer Motion)',
      'Реализуйте адаптивность для всех размеров экранов',
    ],
    code: `// Пример анимации при скролле
import { motion, useInView } from 'framer-motion';

function Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Контент секции */}
    </motion.div>
  );
}`,
    tips: [
      'Разбивайте код на маленькие компоненты — так проще поддерживать',
      'Используйте кастомные хуки для повторяющейся логики',
      'Не забывайте про accessibility (ARIA-атрибуты, семантические теги)',
    ],
  },
  {
    number: 5,
    title: 'Контент и оптимизация',
    description: 'Наполните сайт контентом и оптимизируйте производительность.',
    icon: Rocket,
    details: [
      'Напишите тексты: кратко, по делу, с фокусом на достижения',
      'Добавьте реальные проекты с описаниями и ссылками',
      'Оптимизируйте изображения (WebP, lazy loading)',
      'Проверьте Core Web Vitals (LCP, FID, CLS)',
      'Добавьте meta-теги для SEO и Open Graph для соцсетей',
    ],
    code: `<!-- SEO-метатеги в index.html -->
<title>Имя Фамилия — Frontend Developer</title>
<meta name="description" content="Портфолио разработчика...">
<meta property="og:title" content="Моё портфолио">
<meta property="og:image" content="/preview.jpg">`,
    tips: [
      'Используйте реальные данные, а не placeholder-текст',
      'Добавьте Google Analytics или аналог для отслеживания посещений',
      'Протестируйте сайт на реальных устройствах, не только в эмуляторе',
    ],
  },
  {
    number: 6,
    title: 'Деплой и продвижение',
    description: 'Опубликуйте сайт и расскажите о нём миру.',
    icon: Share2,
    details: [
      'Выберите платформу деплоя: Vercel, Netlify или GitHub Pages',
      'Настройте CI/CD для автоматического деплоя при пуше',
      'Купите кастомный домен (опционально, но рекомендуется)',
      'Добавьте ссылку на портфолио в резюме и профили LinkedIn/GitHub',
      'Поделитесь в соцсетях и получите обратную связь',
    ],
    code: `# Деплой на Vercel
npm i -g vercel
vercel --prod

# Или на Netlify
npm i -g netlify-cli
netlify deploy --prod`,
    tips: [
      'Vercel — лучший выбор для React/Next.js проектов',
      'Настройте HTTPS и кастомный домен для профессионального вида',
      'Регулярно обновляйте портфолио новыми проектами',
    ],
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const copyCode = () => {
    if (step.code) {
      navigator.clipboard.writeText(step.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple-500/30" />
      )}

      <div className="flex gap-4 md:gap-6">
        {/* Step number */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent/20">
            <step.icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div
            className="p-6 rounded-2xl bg-bg-secondary border border-border/50 hover:border-accent/30 transition-all cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-bold">
                    Шаг {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
              <button className="flex-shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-text-muted" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted" />
                )}
              </button>
            </div>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-6 space-y-6"
              >
                {/* Details */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Что нужно сделать:
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code example */}
                {step.code && (
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-text-muted font-medium">Пример кода</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCode();
                        }}
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 text-text-muted text-xs hover:text-accent transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3" />
                            Скопировано
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Копировать
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 rounded-xl bg-bg-primary border border-border/50 overflow-x-auto">
                      <code className="text-sm text-text-secondary font-mono whitespace-pre">
                        {step.code}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Tips */}
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <h4 className="text-sm font-semibold text-accent mb-2">💡 Советы:</h4>
                  <ul className="space-y-1.5">
                    {step.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent mt-0.5">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Guide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="guide" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Руководство</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Как создать <span className="gradient-text">портфолио</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Пошаговое руководство от планирования до деплоя. Кликните на шаг, чтобы 
            раскрыть подробности, примеры кода и полезные советы.
          </p>
        </motion.div>

        <div className="space-y-2">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 text-center"
        >
          <h3 className="text-xl font-semibold mb-3">🎉 Готово!</h3>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Следуя этим шагам, вы создадите профессиональное портфолио, которое 
            выделит вас среди других кандидатов. Не забудьте регулярно обновлять его!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary text-sm">
              ⏱️ Время: 2-4 дня
            </span>
            <span className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary text-sm">
              🎯 Сложность: Средняя
            </span>
            <span className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary text-sm">
              💰 Бюджет: Бесплатно
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
