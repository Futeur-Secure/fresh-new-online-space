import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/context/ThemeContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Hardcoded credentials
  const validEmail = "admin@futeur.com";
  const validPassword = "futeur123";

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check credentials
      if (email === validEmail && password === validPassword) {
        toast({
          title: "Login successful",
          description: "Welcome back to Futeur Shield!",
        });
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "An error occurred during login. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label 
          htmlFor="email"
          className={`transition-colors duration-300 ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="admin@futeur.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
              : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
          }`}
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label 
            htmlFor="password"
            className={`transition-colors duration-300 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Password
          </Label>
          <a 
            href="#" 
            className={`text-xs transition-colors duration-300 hover:underline ${
              isDarkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-500"
            }`}
          >
            Forgot Password?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={`transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"
              : "bg-white/70 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
          }`}
        />
      </div>
      
      <Button 
        type="submit" 
        className={`w-full transition-all duration-300 disabled:opacity-50 ${
          isDarkMode
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      
      {/* Demo credentials hint */}
      {/* <div className={`mt-4 p-3 rounded-lg border transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800/30 border-gray-700 text-gray-400"
          : "bg-blue-50/70 border-blue-200 text-gray-600"
      }`}>
        <p className="text-xs text-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Demo Credentials:
          </span>
          <br />
          Email: admin@futeur.com
          <br />
          Password: futeur123
        </p>
      </div> */}
    </form>
  );
};

export default LoginForm;