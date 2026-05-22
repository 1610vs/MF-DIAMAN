import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-text-primary">DevPortfolio</span>
          </div>

          <p className="text-text-muted text-sm flex items-center gap-1">
            Сделано с <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> и React
          </p>

          <p className="text-text-muted text-sm">
            © {currentYear} Алексей Петров. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
