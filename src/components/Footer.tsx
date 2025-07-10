import Link from 'next/link';
import { BookOpen, GraduationCap, FileText, User, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'בית', href: '/' },
    { name: 'ספרים', href: '/books' },
    { name: 'קורסים', href: '/course' },
    { name: 'בלוג', href: '/blog' },
    { name: 'אודות', href: '/about' },
  ],
  social: [
    {
      name: 'אימייל',
      href: 'mailto:contact@elishas-concept.com',
      icon: Mail,
    },
    {
      name: 'טוויטר',
      href: 'https://twitter.com/elishasconcept',
      icon: Twitter,
    },
    {
      name: 'לינקדאין',
      href: 'https://linkedin.com/in/elishasconcept',
      icon: Linkedin,
    },
    {
      name: 'גיטהאב',
      href: 'https://github.com/elishasconcept',
      icon: Github,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">הקונספט של אלישע</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              העצמת מוחות דרך ספרים תובנתיים וקורסים מקוונים מקיפים. 
              הצטרף לקהילה שלנו של לומדים לכל החיים וגלה אפשרויות חדשות.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              קישורים מהירים
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              משאבים
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  צור קשר
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} הקונספט של אלישע. כל הזכויות שמורות.
            </p>
            <p className="text-sm text-muted-foreground">
              נבנה עם ❤️ באמצעות Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 