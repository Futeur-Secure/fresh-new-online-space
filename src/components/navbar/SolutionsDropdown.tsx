
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "@/utils/navigationHelpers";

const SolutionsDropdown = () => {
  const navigate = useNavigate();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium underline-animation hover:text-futeur-blue transition-colors outline-none">
        Solutions
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-border backdrop-blur-md">
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => navigateToSection('solutions', navigate)}
        >
          All Solutions
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => {
            navigateToSection('solutions', navigate);
            // Set a small timeout to let the page load before scrolling to specific section
            setTimeout(() => {
              document.getElementById('enterprise')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        >
          Enterprise
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => {
            navigateToSection('solutions', navigate);
            setTimeout(() => {
              document.getElementById('financial')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        >
          Financial Services
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => {
            navigateToSection('solutions', navigate);
            setTimeout(() => {
              document.getElementById('healthcare')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        >
          Healthcare
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => {
            navigateToSection('solutions', navigate);
            setTimeout(() => {
              document.getElementById('government')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        >
          Government
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="hover:bg-futeur-blue/20 hover:text-futeur-blue cursor-pointer" 
          onClick={() => {
            navigateToSection('solutions', navigate);
            setTimeout(() => {
              document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}
        >
          Education
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SolutionsDropdown;
