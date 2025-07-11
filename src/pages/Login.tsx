import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Lock, UserPlus, Sun, Moon } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { useTheme } from "@/context/ThemeContext";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#090C19] text-white" 
        : "bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900"
    }`}>
     
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <div className="flex-grow flex items-center justify-center relative">
        {/* Particles background - only in dark mode */}
        {isDarkMode && (
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>
        )}
        
        {/* Background effects */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isDarkMode 
            ? "bg-gradient-radial from-[#0d1433] to-[#080a15] opacity-80"
            : "bg-gradient-radial from-blue-100/30 to-indigo-100/20 opacity-60"
        }`}></div>
        
        {/* Light mode decorative elements */}
        {!isDarkMode && (
          <>
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full blur-xl"></div>
          </>
        )}
        
        {/* Content container */}
        <div className="container mx-auto px-6 relative z-10 py-12 md:py-36">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

            {/* Left side - Welcome text and branding */}
            <div className={`flex-1 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100" : "opacity-0 transform translate-y-6"}`}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className={`w-8 h-8 ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                  <span className={`text-2xl font-display ${isDarkMode ? "text-white" : "text-gray-900"}`}>Futeur</span>
                </div>
                
                <h1 className={`font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Secure Access to 
                  <span className={`bg-clip-text text-transparent block ${
                    isDarkMode 
                      ? "bg-gradient-to-r from-indigo-400 to-purple-500"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600"
                  }`}>
                    Your Protected World
                  </span>
                </h1>
                
                <p className={`text-lg mb-8 max-w-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  Log in to manage your comprehensive security solutions — where business assets and personal data find their ultimate shield.
                </p>
                
                <div className="space-y-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded ${
                      isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                    }`}>
                      <ChevronRight className={`w-4 h-4 ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      }`} />
                    </div>
                    <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                      <span className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>End-to-end encryption</span> for all your sensitive data
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded ${
                      isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                    }`}>
                      <ChevronRight className={`w-4 h-4 ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      }`} />
                    </div>
                    <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                      <span className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>Real-time monitoring</span> of security threats 
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-1 rounded ${
                      isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                    }`}>
                      <ChevronRight className={`w-4 h-4 ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      }`} />
                    </div>
                    <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                      <span className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>Unified dashboard</span> for all protection services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Auth card */}
            <div className={`w-full lg:w-5/12 transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100" : "opacity-0 transform translate-y-6"}`}>
              <Card className={`p-1 rounded-xl overflow-hidden transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0d1433]/70 border border-indigo-900/30 shadow-xl shadow-indigo-900/20 backdrop-blur-sm"
                  : "bg-white/70 border border-white/40 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm"
              }`}>
                <div className="relative">
                  {/* Glow effects */}
                  {isDarkMode ? (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
                    </>
                  )}
                  
                  <div className="p-6 md:p-8 relative z-10">
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className={`grid grid-cols-2 mb-8 transition-colors duration-300 ${
                        isDarkMode ? "bg-[#080a15]/50" : "bg-gray-100/50"
                      }`}>
                        <TabsTrigger 
                          value="login"
                          className={`py-3 transition-all duration-300 ${
                            isDarkMode
                              ? "data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                              : "data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600"
                          }`}
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Login
                        </TabsTrigger>
                        <TabsTrigger 
                          value="signup"
                          className={`py-3 transition-all duration-300 ${
                            isDarkMode
                              ? "data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                              : "data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600"
                          }`}
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Sign Up
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="login" className="mt-0">
                        <LoginForm />
                        
                        <div className="text-center mt-6">
                          <Link 
                            to="/forgot-password" 
                            className={`text-sm transition-colors ${
                              isDarkMode
                                ? "text-indigo-400 hover:text-indigo-300"
                                : "text-indigo-600 hover:text-indigo-500"
                            }`}
                          >
                            Forgot your password?
                          </Link>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="signup" className="mt-0">
                        <SignupForm />
                      </TabsContent>
                    </Tabs>
                    
                    <Alert className={`mt-8 transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-indigo-900/20 border border-indigo-900/30"
                        : "bg-indigo-50/50 border border-indigo-200/50"
                    }`}>
                      <AlertDescription className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        By using our services you agree to our{" "}
                        <Link 
                          to="/privacy" 
                          className={`transition-colors ${
                            isDarkMode
                              ? "text-indigo-400 hover:text-indigo-300"
                              : "text-indigo-600 hover:text-indigo-500"
                          }`}
                        >
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link 
                          to="/terms" 
                          className={`transition-colors ${
                            isDarkMode
                              ? "text-indigo-400 hover:text-indigo-300"
                              : "text-indigo-600 hover:text-indigo-500"
                          }`}
                        >
                          Terms of Service
                        </Link>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;