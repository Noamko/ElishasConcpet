'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Users, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Books',
    description: 'Handpicked books that transform your thinking and expand your knowledge.',
    href: '/books'
  },
  {
    icon: GraduationCap,
    title: 'Online Courses',
    description: 'Comprehensive courses designed to accelerate your learning journey.',
    href: '/course'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a community of like-minded learners and share insights.',
    href: '/community'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    content: 'The courses here completely changed my approach to learning. Highly recommended!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The book recommendations are spot-on. I\'ve learned so much from this platform.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Designer',
    content: 'Amazing community and resources. This is exactly what I was looking for.',
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
                  Unlock Your{' '}
                  <span className="text-primary">Potential</span>
                  <br />
                  Through Learning
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Discover curated books and comprehensive online courses designed to expand your knowledge, 
                  enhance your skills, and transform your thinking.
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
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/books" 
                  className="btn-outline btn-lg"
                >
                  Explore Books
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
                  <span>10,000+ learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>500+ books</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>50+ courses</span>
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
                      <h3 className="font-semibold">Featured Book</h3>
                      <p className="text-sm text-muted-foreground">This Week's Pick</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">The Art of Learning</h4>
                    <p className="text-muted-foreground text-sm">
                      Master the skills of rapid learning and knowledge retention with proven techniques.
                    </p>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground">(4.9/5)</span>
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
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From curated book recommendations to comprehensive online courses, 
              we provide the tools and resources you need to achieve your goals.
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
              What Our Learners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their lives through our platform.
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
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join our community of learners and discover the power of knowledge. 
              Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/course" 
                className="btn-secondary btn-lg inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/about" 
                className="btn-ghost btn-lg text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 