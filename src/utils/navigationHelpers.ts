
/**
 * Helper functions for navigation throughout the site
 */

/**
 * Navigate to a specific section on the homepage
 * - If already on homepage, smoothly scroll to section
 * - If on another page, navigate to homepage with section hash
 */
export const navigateToSection = (
  id: string,
  navigate: (path: string) => void,
  setMobileMenuOpen?: (isOpen: boolean) => void
) => {
  // Get current path
  const currentPath = window.location.pathname;
  
  // If we're on the homepage, scroll to the section
  if (currentPath === '/') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if it's open
      if (setMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  } else {
    // If on another page, navigate to homepage with section hash
    navigate(`/#${id}`);
    // Close mobile menu if it's open
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }
};

/**
 * Reset scroll position when navigating to a new page
 */
export const resetScroll = () => {
  window.scrollTo(0, 0);
};
