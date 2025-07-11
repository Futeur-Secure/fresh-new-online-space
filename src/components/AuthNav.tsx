
import React from "react";
import { Link } from "react-router-dom";
import { Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuthNav = () => {
  // Function to handle logout
  const handleLogout = () => {
    // In a real app, this would clear the auth state
    // For now, just redirect to login page
    window.location.href = "/login";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-futeur-blue transition-transform group-hover:scale-110 duration-300" />
            <span className="text-xl font-bold gradient-text">Futeur Secure</span>
          </Link>
          
          <nav className="hidden md:flex ml-8 space-x-6">
            <Link 
              to="/dashboard" 
              className="text-sm font-medium underline-animation hover:text-futeur-blue transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/documentation" 
              className="text-sm font-medium underline-animation hover:text-futeur-blue transition-colors"
            >
              Documentation
            </Link>
          </nav>
        </div>
        
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="text-gray-400 hover:text-futeur-blue flex items-center gap-2"
        >
          <LogOut size={16} />
          <span>Log Out</span>
        </Button>
      </div>
    </header>
  );
};

export default AuthNav;
