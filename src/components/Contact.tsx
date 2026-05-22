import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alexey@example.com' },
  { icon: Phone, label: 'Телефон', value: '+7 (999) 123-45-67' },
  { icon: MapPin, label: 'Локация', value: 'Москва, Россия' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Контакты</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Свяжитесь <span className="gradient-text">со мной</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Есть вопросы или предложения? Заполните форму ниже или напишите мне напрямую.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border/50">
              <h3 className="text-lg font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">{item.label}</p>
                      <p className="text-text-primary font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20">
              <h3 className="text-lg font-semibold mb-3">Открыт к предложениям</h3>
              <p className="text-text-secondary text-sm">
                В настоящее время я рассматриваю возможности фриланса и полной занятости. 
                Если у вас есть интересный проект — давайте обсудим!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-bg-secondary border border-border/50 space-y-4">
              <h3 className="text-lg font-semibold mb-2">Отправить сообщение</h3>

              <div>
                <label className="block text-sm text-text-muted mb-1.5">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border/50 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm text-text-muted mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border/50 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-text-muted mb-1.5">Сообщение</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-bg-primary border border-border/50 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-success text-white'
                    : 'bg-accent hover:bg-accent-hover text-white glow'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Отправлено!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Отправить сообщение
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
