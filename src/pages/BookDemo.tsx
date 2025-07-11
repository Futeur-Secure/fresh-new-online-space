import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";

import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Check, 
  Monitor, 
  Mail, 
  ArrowRight, 
  Building, 
  User, 
  Briefcase,
  BarChart3,
  CheckCircle2,
  Moon,
  Sun
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BookDemo = () => {
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    industry: "",
    employees: "",
    interests: [],
    date: "",
    time: "",
    timezone: "UTC-8",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const currentInterests = prev.interests;
      if (currentInterests.includes(interest)) {
        return {
          ...prev,
          interests: currentInterests.filter(item => item !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...currentInterests, interest]
        };
      }
    });
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Demo Scheduled",
        description: "We've scheduled your demo. Check your email for confirmation.",
      });
    }, 1500);
  };

  useEffect(() => {
    resetScroll();
  }, []);

  const productOptions = [
    { id: "secure-systems", name: "Secure Systems" },
    { id: "hyperledger", name: "Hyperledger Logging" },
    { id: "wazuh", name: "Wazuh Integration" },
    { id: "zeek", name: "Zeek Network Analysis" },
    { id: "threat-detection", name: "Threat Detection" },
    { id: "compliance", name: "Compliance Management" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode 
      ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
      : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'}`}>
      
      <Navbar />
      
      {/* Theme Toggle Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className={`rounded-full p-2 ${isDarkMode 
            ? 'border-gray-700 hover:bg-gray-800' 
            : 'border-gray-300 hover:bg-gray-100'}`}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900'}`}>
                Schedule a Demo
              </h1>
              <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                See how our security solutions can protect your business
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="w-full flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 1 
                      ? 'bg-indigo-600 text-white' 
                      : isDarkMode ? 'bg-gray-800 border border-gray-700 text-gray-400' : 'bg-gray-200 border border-gray-300 text-gray-500'
                  }`}>
                    {step > 1 ? <Check className="w-4 h-4" /> : <span className="text-sm font-medium">1</span>}
                  </div>
                  <div className={`h-1 flex-grow mx-4 ${step > 1 ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 2 
                      ? 'bg-indigo-600 text-white' 
                      : isDarkMode ? 'bg-gray-800 border border-gray-700 text-gray-400' : 'bg-gray-200 border border-gray-300 text-gray-500'
                  }`}>
                    {step > 2 ? <Check className="w-4 h-4" /> : <span className="text-sm font-medium">2</span>}
                  </div>
                  <div className={`h-1 flex-grow mx-4 ${step > 2 ? 'bg-indigo-600' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === 3 
                      ? 'bg-indigo-600 text-white' 
                      : isDarkMode ? 'bg-gray-800 border border-gray-700 text-gray-400' : 'bg-gray-200 border border-gray-300 text-gray-500'
                  }`}>
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 text-center gap-4">
                <div className={`text-sm ${step === 1 ? 'text-indigo-600 font-medium' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Your Information
                </div>
                <div className={`text-sm ${step === 2 ? 'text-indigo-600 font-medium' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Preferences
                </div>
                <div className={`text-sm ${step === 3 ? 'text-indigo-600 font-medium' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Schedule
                </div>
              </div>
            </div>
            
            {/* Form Card */}
            <Card className={`${isDarkMode 
              ? 'bg-gray-800/90 border-gray-700' 
              : 'bg-white border-gray-200 shadow-lg'} rounded-xl backdrop-blur-sm`}>
              
              <form onSubmit={handleSubmit} className="p-8">
                
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6 text-indigo-600">Your Information</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          First Name*
                        </label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className={`h-11 ${isDarkMode 
                            ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                            : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Last Name*
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className={`h-11 ${isDarkMode 
                            ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                            : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`h-11 ${isDarkMode 
                          ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                          : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Company Name*
                      </label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className={`h-11 ${isDarkMode 
                          ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                          : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="jobTitle" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Job Title*
                        </label>
                        <Input
                          id="jobTitle"
                          placeholder="Your role"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                          className={`h-11 ${isDarkMode 
                            ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                            : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Industry*
                        </label>
                        <Select 
                          onValueChange={(value) => handleSelectChange('industry', value)}
                          value={formData.industry}
                        >
                          <SelectTrigger className={`h-11 ${isDarkMode 
                            ? 'bg-gray-900/70 border-gray-600' 
                            : 'bg-white border-gray-300'}`}>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
                            <SelectItem value="finance">Finance & Banking</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Company Size*
                      </label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('employees', value)}
                        value={formData.employees}
                      >
                        <SelectTrigger className={`h-11 ${isDarkMode 
                          ? 'bg-gray-900/70 border-gray-600' 
                          : 'bg-white border-gray-300'}`}>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1001+">1001+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex justify-end mt-8">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Demo Preferences */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6 text-indigo-600">Demo Preferences</h2>
                    
                    <div className="space-y-4">
                      <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} block mb-3`}>
                        Which products are you interested in?*
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {productOptions.map((product) => (
                          <div 
                            key={product.id}
                            className={`p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.interests.includes(product.id)
                                ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500' 
                                : isDarkMode 
                                  ? 'border-gray-600 bg-gray-800/50 hover:border-gray-500' 
                                  : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                            }`}
                            onClick={() => handleInterestToggle(product.id)}
                          >
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                                formData.interests.includes(product.id)
                                  ? 'bg-indigo-600' 
                                  : isDarkMode ? 'border border-gray-600' : 'border border-gray-400'
                              }`}>
                                {formData.interests.includes(product.id) && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Additional Requirements
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your specific needs or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`${isDarkMode 
                          ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                          : 'bg-white border-gray-300 focus:border-indigo-500'} resize-none`}
                      />
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        type="button" 
                        onClick={prevStep}
                        variant="outline" 
                        className={`${isDarkMode 
                          ? 'border-gray-600 hover:bg-gray-800' 
                          : 'border-gray-300 hover:bg-gray-50'}`}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Schedule */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6 text-indigo-600">Schedule Your Demo</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="date" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Preferred Date*
                          </label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className={`h-11 ${isDarkMode 
                              ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                              : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="time" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Preferred Time*
                          </label>
                          <Input
                            id="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className={`h-11 ${isDarkMode 
                              ? 'bg-gray-900/70 border-gray-600 focus:border-indigo-500' 
                              : 'bg-white border-gray-300 focus:border-indigo-500'}`}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Timezone*
                          </label>
                          <Select 
                            onValueChange={(value) => handleSelectChange('timezone', value)}
                            value={formData.timezone}
                          >
                            <SelectTrigger className={`h-11 ${isDarkMode 
                              ? 'bg-gray-900/70 border-gray-600' 
                              : 'bg-white border-gray-300'}`}>
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
                              <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                              <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
                              <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
                              <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                              <SelectItem value="UTC+0">London (UTC+0)</SelectItem>
                              <SelectItem value="UTC+1">Central Europe (UTC+1)</SelectItem>
                              <SelectItem value="UTC+8">Singapore/China (UTC+8)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className={`${isDarkMode 
                        ? 'bg-gray-800/70 border-gray-700' 
                        : 'bg-gray-50 border-gray-200'} p-6 rounded-lg border`}>
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <Monitor className="w-5 h-5 text-indigo-600 mr-2" />
                          What to Expect
                        </h3>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              30-45 minute personalized demonstration
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Q&A with security specialist
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Customized solutions for your needs
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Follow-up resources
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        type="button" 
                        onClick={prevStep}
                        variant="outline" 
                        className={`${isDarkMode 
                          ? 'border-gray-600 hover:bg-gray-800' 
                          : 'border-gray-300 hover:bg-gray-50'}`}
                      >
                        Back
                      </Button>
                      
                      <Button 
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                        disabled={loading}
                      >
                        {loading ? "Scheduling..." : "Schedule Demo"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
            
            {/* Info Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className={`${isDarkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'} p-6 text-center`}>
                <div className={`w-12 h-12 rounded-full ${isDarkMode 
                  ? 'bg-indigo-600/20' 
                  : 'bg-indigo-100'} mx-auto flex items-center justify-center mb-3`}>
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-medium mb-2">Duration</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  30-45 minutes
                </p>
              </Card>
              
              <Card className={`${isDarkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'} p-6 text-center`}>
                <div className={`w-12 h-12 rounded-full ${isDarkMode 
                  ? 'bg-indigo-600/20' 
                  : 'bg-indigo-100'} mx-auto flex items-center justify-center mb-3`}>
                  <CalendarIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-medium mb-2">Availability</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Monday-Friday, 9AM-5PM PT
                </p>
              </Card>
              
              <Card className={`${isDarkMode 
                ? 'bg-gray-800/70 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'} p-6 text-center`}>
                <div className={`w-12 h-12 rounded-full ${isDarkMode 
                  ? 'bg-indigo-600/20' 
                  : 'bg-indigo-100'} mx-auto flex items-center justify-center mb-3`}>
                  <Monitor className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-medium mb-2">Platform</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Zoom or Teams
                </p>
              </Card>
            </div>
            
            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Need immediate assistance?
              </p>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className={`${isDarkMode 
                    ? 'border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-400' 
                    : 'border-indigo-500/50 hover:bg-indigo-50 text-white'}`}
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDemo;