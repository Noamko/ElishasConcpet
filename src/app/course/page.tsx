'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, Star, Play, CheckCircle } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Mastering React Development',
    instructor: 'Sarah Johnson',
    description: 'Learn React from scratch to advanced concepts with hands-on projects.',
    duration: '12 hours',
    students: 15420,
    rating: 4.9,
    price: 89,
    originalPrice: 129,
    level: 'Intermediate',
    lessons: 48,
    featured: true,
    category: 'Programming',
  },
  {
    id: 2,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Michael Chen',
    description: 'Full-stack web development course covering HTML, CSS, JavaScript, and Node.js.',
    duration: '25 hours',
    students: 23450,
    rating: 4.8,
    price: 149,
    originalPrice: 199,
    level: 'Beginner',
    lessons: 85,
    featured: false,
    category: 'Programming',
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    instructor: 'Emily Rodriguez',
    description: 'Introduction to data science, statistics, and machine learning concepts.',
    duration: '18 hours',
    students: 12340,
    rating: 4.7,
    price: 119,
    originalPrice: 159,
    level: 'Intermediate',
    lessons: 62,
    featured: false,
    category: 'Data Science',
  },
  {
    id: 4,
    title: 'Digital Marketing Mastery',
    instructor: 'David Kim',
    description: 'Comprehensive digital marketing strategies for business growth.',
    duration: '15 hours',
    students: 9870,
    rating: 4.9,
    price: 99,
    originalPrice: 139,
    level: 'Beginner',
    lessons: 55,
    featured: false,
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'UI/UX Design Principles',
    instructor: 'Lisa Wang',
    description: 'Master the fundamentals of user interface and user experience design.',
    duration: '10 hours',
    students: 8760,
    rating: 4.8,
    price: 79,
    originalPrice: 119,
    level: 'Beginner',
    lessons: 42,
    featured: false,
    category: 'Design',
  },
  {
    id: 6,
    title: 'Advanced JavaScript Concepts',
    instructor: 'Alex Thompson',
    description: 'Deep dive into advanced JavaScript patterns and best practices.',
    duration: '14 hours',
    students: 11230,
    rating: 4.9,
    price: 109,
    originalPrice: 149,
    level: 'Advanced',
    lessons: 58,
    featured: false,
    category: 'Programming',
  },
];

const categories = [
  'All',
  'Programming',
  'Data Science',
  'Marketing',
  'Design',
  'Business',
  'Personal Development',
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Master New Skills with Our Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive online courses designed by industry experts to help you 
              learn at your own pace and achieve your career goals.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>{courses.length}+ courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>75,000+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>4.8+ average rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground bg-muted text-muted-foreground"
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {levels.map((level, index) => (
                <motion.button
                  key={level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index + categories.length) * 0.05 }}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground bg-muted/50 text-muted-foreground"
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-2 py-1 rounded text-xs font-medium">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {course.instructor}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-foreground">
                            ${course.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${course.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="btn-primary w-full mt-4">
                      Enroll Now
                    </button>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of students who have already taken the first step towards 
              their dream career with our comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary btn-lg">
                Browse All Courses
              </button>
              <button className="btn-ghost btn-lg text-primary-foreground hover:bg-primary-foreground/10">
                Get a Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 