'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';
import Image from 'next/image';

const books = [
  {
    id: 'elishas-concept',
    title: "אלישע׳ס קונספט",
    author: 'אלישע קורן',
    description: 'יש פיזיותרפיה אחרת — טיפול מנואלי מכוון תוצאות',
    rating: 5.0,
    readTime: '',
    category: 'פיזיותרפיה',
    image: '/books/elishas-concept.jpeg',
    featured: true,
    language: 'עברית',
  },
  {
    id: 'tmj-cover',
    title: 'הטיפול הפיזיותרפי ב-TMJ Dysfunction',
    author: 'אלישע קורן',
    description: 'הטיפול הפיזיותרפי ב-TEMPOROMANDIBULAR DYSFUNCTION',
    rating: 5.0,
    readTime: '',
    category: 'פיזיותרפיה',
    image: '/books/TMJ-cover.jpeg',
    featured: true,
    language: 'עברית',
  },
];

const categories = [
  'All',
  'פיזיותרפיה',
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Discover Amazing Books
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Curated collection of books that will expand your knowledge, 
              transform your thinking, and accelerate your growth.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{books.length} books</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>5.0 average rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 items-stretch">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div className="card w-[320px] h-[500px] overflow-hidden flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative w-full h-[380px]">
                    {book.image && (
                      <Image src={book.image} alt={book.title} fill style={{objectFit:'cover'}} className="rounded-t-lg" sizes="320px" />
                    )}
                    {book.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1 overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {book.category}
                      </span>
                      {book.language && (
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                          {book.language}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {book.author}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {book.description}
                    </p>
                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{book.rating}</span>
                        </div>
                      </div>
                      <button className="btn-primary btn-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let us know what topics interest you, and we'll curate personalized recommendations.
            </p>
            <button className="btn-primary btn-lg">
              Request a Book
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 