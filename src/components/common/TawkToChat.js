import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Remove any existing Tawk.to script to avoid duplicates
    const existingScript = document.getElementById('tawk-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add the new script
    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.async = true;
    script.src = 'https://embed.tawk.to/685ea09c3819e5190c8b6980/1iuoq6pfp';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Add custom styling to make the chat widget not full screen
    const style = document.createElement('style');
    style.textContent = `
      .tawk-min-container {
        height: auto !important;
        width: auto !important;
        max-height: 80vh !important;
        max-width: 90vw !important;
      }
      
      @media (min-width: 768px) {
        .tawk-min-container {
          max-width: 400px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Add the script to the document
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.getElementById('tawk-script')) {
        document.getElementById('tawk-script').remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat;