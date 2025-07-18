/**
 * Utility functions for handling domain-based routing
 */

/**
 * Determine the domain type from the current hostname
 */
export const getDomainType = (): 'main' | 'futeurcred' | 'unknown' => {
  const hostname = window.location.hostname;
  
  if (hostname.includes('futeurcred.')) {
    return 'futeurcred';
  }
  
  if (hostname.includes('futeursecure.com') || hostname.includes('localhost')) {
    return 'main';
  }
  
  return 'unknown';
};

/**
 * Get the base URL for the main domain
 */
export const getMainDomain = (): string => {
  const hostname = window.location.hostname;
  if (hostname.includes('localhost')) return `${window.location.protocol}//${hostname}:${window.location.port}`;
  return 'https://www.futeursecure.com';
};

/**
 * Get the base URL for the FuteurCred domain
 */
export const getFuteurCredDomain = (): string => {
  const hostname = window.location.hostname;
  if (hostname.includes('localhost')) return `${window.location.protocol}//futeurcred.${hostname}:${window.location.port}`;
  return 'https://futeurcred.futeursecure.com';
};

/**
 * Get the correct URL for navigation across domains
 */
export const getCrossDomainUrl = (path: string, targetDomain?: 'main' | 'futeurcred'): string => {
  const currentDomain = getDomainType();
  
  // If no target domain specified, use current domain logic
  if (!targetDomain) {
    // Special case: if we're on futeurcred domain and trying to access a non-futeurcred page
    if (currentDomain === 'futeurcred' && path !== '/use-cases/futeurcred') {
      return `${getMainDomain()}${path}`;
    }
    
    // Special case: if we're on main domain and trying to access futeurcred page
    if (currentDomain === 'main' && path === '/use-cases/futeurcred') {
      return getFuteurCredDomain();
    }
    
    // Otherwise stay on current domain
    return path;
  }
  
  // Navigate to specific domain
  switch (targetDomain) {
    case 'main':
      return `${getMainDomain()}${path}`;
    case 'futeurcred':
      if (path === '/' || path === '') {
        return getFuteurCredDomain();
      }
      return `${getMainDomain()}/use-cases/futeurcred`;
    default:
      return path;
  }
};
