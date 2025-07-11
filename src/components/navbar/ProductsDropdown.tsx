
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const ProductsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm font-medium underline-animation hover:text-futeur-blue transition-colors outline-none">
        Product
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-border backdrop-blur-md">
        <DropdownMenuItem>
          <Link to="/products" className="w-full">
            Quantum Shield Platform
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
