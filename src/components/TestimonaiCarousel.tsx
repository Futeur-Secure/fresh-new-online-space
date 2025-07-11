import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Sun, Moon, Quote } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const autoScrollRef = useRef(null);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechForward",
      company: "TechForward",
      quote: "Implementing Futeur's security platform was the best decision we made this year. The robust threat detection has eliminated our vulnerabilities and given us peace of mind.",
      avatarSeed: "sarah-j",
      rating: 5,
      highlight: "Eliminated vulnerabilities"
    },
    {
      name: "Michael Chen",
      role: "Director of IT, Global Solutions",
      company: "Global Solutions",
      quote: "The seamless integration between business and personal security makes Futeur stand out. I've never seen such comprehensive protection with this level of user experience.",
      avatarSeed: "michael-c",
      rating: 5,
      highlight: "Seamless integration"
    },
    {
      name: "Elena Rodriguez",
      role: "Security Specialist, DataShield Inc.",
      company: "DataShield Inc.",
      quote: "Futeur provides the comprehensive protection modern businesses need. Their real-time monitoring saved us from a major breach attempt last month.",
      avatarSeed: "elena-r",
      rating: 5,
      highlight: "Prevented major breach"
    },
    {
      name: "James Wilson",
      role: "CEO, Innovate Systems",
      company: "Innovate Systems",
      quote: "Our entire organization rests easier knowing we're protected by Futeur. The dashboard gives us complete transparency into our security posture with actionable insights.",
      avatarSeed: "james-w",
      rating: 5,
      highlight: "Complete transparency"
    },
    {
      name: "Alexandra Kim",
      role: "CISO, NextGen Finance",
      company: "NextGen Finance",
      quote: "The AI-powered threat detection is phenomenal. Futeur identified and neutralized threats that our previous solution completely missed.",
      avatarSeed: "alex-k",
      rating: 5,
      highlight: "AI-powered detection"
    },
    {
      name: "David Martinez",
      role: "IT Director, Healthcare Plus",
      company: "Healthcare Plus",
      quote: "Compliance became effortless with Futeur. Their automated reporting saved us hundreds of hours and ensures we never miss a regulatory requirement.",
      avatarSeed: "david-m",
      rating: 5,
      highlight: "Effortless compliance"
    }
  ];

  // Enhanced avatar generation with better color schemes
  const generateAvatarColors = (seed, isDark) => {
    const charCodes = seed.split('').reduce((sum, char, i) => sum + char.charCodeAt(0) * (i + 1), 0);
    const hue = (charCodes % 360);
    
    if (isDark) {
      const saturation = 70 + (charCodes % 20);
      const lightness = 50 + (charCodes % 15);
      return {
        bg: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        text: `hsl(${hue}, ${saturation}%, 98%)`
      };
    } else {
      const saturation = 60 + (charCodes % 25);
      const lightness = 45 + (charCodes % 20);
      return {
        bg: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        text: `hsl(${hue}, ${saturation}%, 95%)`
      };
    }
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setAutoScrollPaused(true);
    setTimeout(() => setAutoScrollPaused(false), 8000);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    } else {
      newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    }
    goToSlide(newIndex);
  };

  useEffect(() => {
    if (autoScrollPaused) return;
    
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [autoScrollPaused, testimonials.length]);

  const themeClasses = {
    background: isDarkMode ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-gray-950' : 'bg-gradient-to-b from-slate-50 via-white to-slate-100',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    subtitle: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    card: isDarkMode ? 'bg-gray-800/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50',
    cardHover: isDarkMode ? 'hover:bg-gray-700/90' : 'hover:bg-gray-50/90',
    button: isDarkMode ? 'bg-gray-800/90 hover:bg-gray-700 border-gray-600' : 'bg-white/90 hover:bg-gray-50 border-gray-300',
    accent: isDarkMode ? 'text-purple-400' : 'text-purple-600',
    quote: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    highlight: isDarkMode ? 'text-purple-300' : 'text-purple-700',
    dot: isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400',
    activeDot: isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
  };

  return (
    <section 
      className={`relative py-24 transition-all duration-500 ${themeClasses.background} ${themeClasses.text}`}
      onMouseEnter={() => setAutoScrollPaused(true)}
      onMouseLeave={() => setAutoScrollPaused(false)}
      ref={carouselRef}
    >
      {/* Animated background patterns */}
     
    
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className={`${themeClasses.accent} opacity-60`} size={24} />
            <span className={`text-sm uppercase tracking-wider font-medium ${themeClasses.accent}`}>
              Customer Stories
            </span>
            <Quote className={`${themeClasses.accent} opacity-60 transform scale-x-[-1]`} size={24} />
          </div>
          <h2 className="text-5xl md:text-5xl font-light mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Security Insights
          </h2>
          <p className={`text-xl ${themeClasses.subtitle} max-w-3xl mx-auto leading-relaxed`}>
            Discover how industry leaders are transforming their security posture with Futeur Secure
          </p>
          
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation arrows */}
          <button 
            className={`absolute -left-6 md:left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full border transition-all duration-300 ${themeClasses.button} backdrop-blur-sm shadow-xl hover:scale-110`}
            onClick={() => navigate('prev')}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`absolute -right-6 md:right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full border transition-all duration-300 ${themeClasses.button} backdrop-blur-sm shadow-xl hover:scale-110`}
            onClick={() => navigate('next')}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => {
                const avatarColors = generateAvatarColors(testimonial.avatarSeed, isDarkMode);
                
                return (
                  <div key={index} className="w-full flex flex-wrap justify-center gap-6 lg:gap-8 flex-shrink-0 px-4">
                    {[0, 1, 2].map((offset) => {
                      const testimonialIndex = (index + offset) % testimonials.length;
                      const testimonialData = testimonials[testimonialIndex];
                      const colors = generateAvatarColors(testimonialData.avatarSeed, isDarkMode);
                      
                      return (
                        <div 
                          key={`${index}-${offset}`} 
                          className={`w-full md:w-80 lg:w-96 border backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${themeClasses.card} ${themeClasses.cardHover} shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}
                          style={{
                            animationDelay: `${offset * 0.1}s`
                          }}
                        >
                          {/* Header with rating and highlight */}
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={18} 
                                  className={i < testimonialData.rating 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : `${isDarkMode ? "text-gray-600" : "text-gray-300"}`
                                  }
                                />
                              ))}
                            </div>
                            <div className={`text-xs px-3 py-1 rounded-full ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'} font-medium`}>
                              {testimonialData.highlight}
                            </div>
                          </div>
                          
                          {/* Quote */}
                          <div className="relative mb-8">
                            <Quote className={`absolute -top-2 -left-2 ${themeClasses.accent} opacity-30`} size={20} />
                            <p className={`${themeClasses.quote} text-lg leading-relaxed pl-4`}>
                              {testimonialData.quote}
                            </p>
                          </div>
                          
                          {/* Profile */}
                          <div className="flex items-center">
                            <div 
                              className="w-14 h-14 rounded-full flex items-center justify-center mr-4 text-lg font-semibold shadow-lg"
                              style={{ 
                                backgroundColor: colors.bg,
                                color: colors.text
                              }}
                            >
                              {getInitials(testimonialData.name)}
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-semibold text-lg ${themeClasses.text}`}>
                                {testimonialData.name}
                              </h3>
                              <p className={`text-sm ${themeClasses.subtitle} mb-1`}>
                                {testimonialData.role}
                              </p>
                              <p className={`text-xs ${themeClasses.accent} font-medium`}>
                                {testimonialData.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced dots navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? `${themeClasses.activeDot} w-12 shadow-lg` 
                    : `${themeClasses.dot} w-3 hover:w-6`
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Progress indicator */}
          <div className="mt-8 flex justify-center">
            <div className={`text-sm ${themeClasses.subtitle} bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {activeIndex + 1} of {testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;