'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Users, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: BookOpen,
    title: 'ספרים נבחרים',
    description: 'ספרים נבחרים בקפידה שמשנים את החשיבה שלך ומרחיבים את הידע שלך.',
    href: '/books'
  },
  {
    icon: GraduationCap,
    title: 'קורסים מקוונים',
    description: 'קורסים מקיפים שנועדו להאיץ את מסע הלמידה שלך.',
    href: '/course'
  },
  {
    icon: Users,
    title: 'קהילה',
    description: 'הצטרף לקהילה של לומדים בעלי מחשבה דומה ושתף תובנות.',
    href: '/community'
  }
];

const testimonials = [
  {
    name: 'שרה ג\'ונסון',
    role: 'מהנדסת תוכנה',
    content: 'הקורסים כאן שינו לחלוטין את הגישה שלי ללמידה. מומלץ מאוד!',
    rating: 5
  },
  {
    name: 'מיכאל צ\'ן',
    role: 'מנהל מוצר',
    content: 'המלצות הספרים מדויקות. למדתי כל כך הרבה מהפלטפורמה הזו.',
    rating: 5
  },
  {
    name: 'אמילי רודריגז',
    role: 'מעצבת',
    content: 'קהילה מדהימה ומשאבים. זה בדיוק מה שחיפשתי.',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  הקונספט של אלישע – פיזיותרפיה בגישה אחרת
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  גלו דרך חדשה לחשוב, לטפל ולהבין פיזיותרפיה – שילוב של ניסיון, חדשנות וחשיבה ביקורתית.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link 
                  href="/course" 
                  className="btn-primary btn-lg inline-flex items-center gap-2"
                >
                  התחל ללמוד
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/books" 
                  className="btn-outline btn-lg"
                >
                  חקר ספרים
                </Link>
              </motion.div>

              <motion.div 
                className="flex items-center gap-8 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>10,000+ לומדים</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>500+ ספרים</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>50+ קורסים</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">ספר מומלץ</h3>
                      <p className="text-sm text-muted-foreground">הטיפול הפיזיותרפי ב־<br /><span dir="ltr">TMJ Dysfunction</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">הטיפול הפיזיותרפי ב־<br /><span dir="ltr">TMJ Dysfunction</span></h4>
                    <p className="text-muted-foreground text-sm">
                      "ספר מצוין אשר מסביר בצורה יסודית ומעמיקה את האנטומיה, הפיזיולוגיה, הביומכניקה והמכניקה של מערכת הלעיסה... ספר חובה לכל פיזיותרפיסט שעוסק בתחום הדיספונקציה של מערכת הלעיסה."
                      <br />
                      <span className="text-xs text-muted-foreground">— ד"ר ואסים עבוד</span>
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground">(5/5)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Elisha and Concept Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          {/* Photo placeholder */}
          <Image src="/general/elisha.png" alt="אלישע קורן" width={128} height={128} className="rounded-full object-cover mb-6 md:mb-0" />
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">על אלישע קורן</h2>
            <p className="text-lg">
              <b>אלישע קורן</b> סיים את לימודי הפיזיותרפיה באוניברסיטת תל אביב ב-1986. גישתו הייחודית, שהתפתחה מתוך ניסיון של עשרות שנים, זכתה לשם "אלישע׳ס קונספט".
            </p>
            <h3 className="text-xl font-semibold">על הקונספט</h3>
            <p className="text-lg">
              "אני לא יכול לומר שאני מרוצה, תמיד ניתן להרחיב, להעמיק ולגלות... אני מאמין שספר זה נותן בידי הפיזיותרפיסט המטפל כלי שיאפשר לו לטפל בבעיות השונות של מערכת הלעיסה לא על ידי יישום של טכניקות אקראי אלא על בסיס ידע מעמיק והבנה של מערכת, האנטומיה שלה, תפקודי הטיפול ודרכי הטיפול האפשריות."
            </p>
            <p className="text-lg">
             כתיבת הספר לא הייתה בתוכנית, אך מתוך חיפוש מתמיד אחר פתרונות טובים יותר ובעיות שלא קיבלו מענה, נולד "אלישע׳ס קונספט" — תפיסה מגובשת וחדשנית בפיזיותרפיה.
            </p>
            <p className="text-lg">
              "אלישע׳ס קונספט" משלב גישות וטכניקות קיימות עם חדשות, ומאפשר יישום קל ויעיל בקליניקה. הספר מרכז את עקרונות הגישה והטיפול.
            </p>
            <Link href="/about" className="btn-primary mt-2 inline-block">קראו עוד</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              כל מה שאתה צריך כדי להצליח
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              מהמלצות ספרים נבחרים ועד קורסים מקוונים מקיפים, 
              אנו מספקים את הכלים והמשאבים שאתה צריך כדי להשיג את המטרות שלך.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={feature.href} className="block">
                  <div className="card p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              מה הלומדים שלנו אומרים
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              הצטרף לאלפי לומדים מרוצים ששינו את חייהם דרך הפלטפורמה שלנו.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              מוכן להתחיל את מסע הלמידה שלך?
            </h2>
            <p className="text-xl opacity-90">
              הצטרף לקהילה שלנו של לומדים וגלה את כוח הידע. 
              התחל את השינוי שלך היום.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/course" 
                className="btn-secondary btn-lg inline-flex items-center gap-2"
              >
                התחל עכשיו
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/about" 
                className="btn-ghost btn-lg text-primary-foreground hover:bg-primary-foreground/10"
              >
                למידע נוסף
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 