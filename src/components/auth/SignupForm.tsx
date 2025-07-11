import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "@/context/ThemeContext";
import BusinessDetailsSection from "./BusinessDetailsSection";

const SignupForm = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('signup-email');
    const password = formData.get('signup-password');
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const companyName = formData.get('company-name');
    const industry = formData.get('industry');
    const companySize = formData.get('company-size');
    const address = formData.get('address');
    const city = formData.get('city');
    const state = formData.get('state');
    const zipCode = formData.get('zip-code');
    const country = formData.get('country');
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
          data: {
            first_name: firstName as string,
            last_name: lastName,
            company_name: companyName,
            industry,
            company_size: companySize,
            address,
            city,
            state,
            zip_code: zipCode,
            country
          }
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Account Created",
        description: "Please check your email to verify your account.",
      });
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: error instanceof Error ? error.message : "An error occurred during signup.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <div className="text-center mb-6">
        <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? "bg-indigo-500/20" 
            : "bg-indigo-100"
        }`}>
          <Shield className={`transition-colors duration-300 ${
            isDarkMode ? "text-indigo-400" : "text-indigo-600"
          }`} />
        </div>
        <h3 className={`text-xl font-bold transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Create an Account
        </h3>
      </div>
      
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label 
              htmlFor="first-name" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              First Name
            </label>
            <Input
              id="first-name"
              name="first-name"
              placeholder="John"
              required
              className={`transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                  : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
          </div>
          
          <div className="space-y-2">
            <label 
              htmlFor="last-name" 
              className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Last Name
            </label>
            <Input
              id="last-name"
              name="last-name"
              placeholder="Doe"
              required
              className={`transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                  : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="signup-email" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email Address
          </label>
          <Input
            id="signup-email"
            name="signup-email"
            type="email"
            placeholder="your.email@company.com"
            required
            className={`transition-all duration-300 ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
            }`}
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="signup-password" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Create Password
          </label>
          <div className="relative">
            <Input
              id="signup-password"
              name="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className={`pr-10 transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                  : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute right-3 top-2.5 transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className={`text-xs mt-1 transition-colors duration-300 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Password must be at least 8 characters and include a number and special character
          </p>
        </div>
        
        <BusinessDetailsSection />
        
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="terms"
            required
            className={`mt-1 rounded transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-600 text-indigo-500 focus:ring-indigo-500/20"
                : "bg-white border-gray-300 text-indigo-600 focus:ring-indigo-500/20"
            }`}
          />
          <label 
            htmlFor="terms" 
            className={`text-xs transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I agree to the{" "}
            <Link 
              to="/terms" 
              className={`transition-colors duration-300 hover:underline ${
                isDarkMode
                  ? "text-indigo-400 hover:text-indigo-300"
                  : "text-indigo-600 hover:text-indigo-500"
              }`}
            >
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link 
              to="/privacy" 
              className={`transition-colors duration-300 hover:underline ${
                isDarkMode
                  ? "text-indigo-400 hover:text-indigo-300"
                  : "text-indigo-600 hover:text-indigo-500"
              }`}
            >
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button 
          type="submit" 
          className={`w-full transition-all duration-300 disabled:opacity-50 ${
            isDarkMode
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
          }`}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </>
  );
};

export default SignupForm;