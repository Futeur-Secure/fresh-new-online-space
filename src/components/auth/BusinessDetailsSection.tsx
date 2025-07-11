import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useTheme } from "@/context/ThemeContext";

const BusinessDetailsSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="space-y-4 rounded-md">
      <h4 className={`font-medium flex items-center gap-2 transition-colors duration-300 ${
        isDarkMode ? "text-futeur-blue" : "text-indigo-600"
      }`}>
        <Building size={16} />
        Business Information
      </h4>
      
      <div className="space-y-2">
        <label 
          htmlFor="company-name" 
          className={`text-sm font-medium transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Company Name
        </label>
        <Input
          id="company-name"
          name="company-name"
          placeholder="Acme Corp"
          className={`transition-all duration-300 ${
            isDarkMode 
              ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
              : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
          }`}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label 
            htmlFor="industry" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Industry
          </label>
          <Select name="industry">
            <SelectTrigger className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 hover:bg-white"
            }`}>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent className={`transition-colors duration-300 ${
              isDarkMode 
                ? "bg-gray-800 border-gray-700" 
                : "bg-white border-gray-200"
            }`}>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="company-size" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Company Size
          </label>
          <Select name="company-size">
            <SelectTrigger className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 hover:bg-white"
            }`}>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent className={`transition-colors duration-300 ${
              isDarkMode 
                ? "bg-gray-800 border-gray-700" 
                : "bg-white border-gray-200"
            }`}>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501-1000">501-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="address" 
          className={`text-sm font-medium transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Address
        </label>
        <Textarea
          id="address"
          name="address"
          placeholder="123 Business St."
          className={`transition-all duration-300 ${
            isDarkMode 
              ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
              : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
          }`}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label 
            htmlFor="city" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            City
          </label>
          <Input
            id="city"
            name="city"
            placeholder="San Francisco"
            className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
            }`}
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="state" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            State/Province
          </label>
          <Input
            id="state"
            name="state"
            placeholder="California"
            className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
            }`}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label 
            htmlFor="zip-code" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Zip/Postal Code
          </label>
          <Input
            id="zip-code"
            name="zip-code"
            placeholder="94105"
            className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
            }`}
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="country" 
            className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Country
          </label>
          <Input
            id="country"
            name="country"
            placeholder="United States"
            className={`transition-all duration-300 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 focus:border-futeur-blue text-white placeholder:text-gray-400"
                : "bg-white/80 border-gray-200 focus:border-indigo-500 text-gray-900 placeholder:text-gray-500 hover:bg-white"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsSection;