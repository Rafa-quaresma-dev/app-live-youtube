import { useEffect } from "react";
import { pixelsConfig } from "@/config/livestream-config";

/**
 * PixelsInjector Component
 * Injects tracking pixels (Facebook, TikTok, Google Analytics) into the page
 * Place this component once at the root level (e.g., in your main layout or App.tsx)
 */
export const PixelsInjector = () => {
  useEffect(() => {
    // Inject Facebook Pixel
    if (pixelsConfig.facebookPixel) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = pixelsConfig.facebookPixel;

      // Extract and execute scripts
      const scripts = tempDiv.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');

        // Copy attributes
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });

        // Copy inline content
        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        // Add to head to execute
        document.head.appendChild(newScript);
      });

      // Append noscript tags
      const noscripts = tempDiv.querySelectorAll('noscript');
      noscripts.forEach((noscript) => {
        document.head.appendChild(noscript.cloneNode(true));
      });
    }

    // Inject TikTok Pixel
    if (pixelsConfig.tiktokPixel) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = pixelsConfig.tiktokPixel;

      const scripts = tempDiv.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');

        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });

        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        document.head.appendChild(newScript);
      });

      const noscripts = tempDiv.querySelectorAll('noscript');
      noscripts.forEach((noscript) => {
        document.head.appendChild(noscript.cloneNode(true));
      });
    }

    // Inject Google Analytics Pixel
    if (pixelsConfig.googleAnalyticsPixel) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = pixelsConfig.googleAnalyticsPixel;

      const scripts = tempDiv.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');

        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });

        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        document.head.appendChild(newScript);
      });

      const noscripts = tempDiv.querySelectorAll('noscript');
      noscripts.forEach((noscript) => {
        document.head.appendChild(noscript.cloneNode(true));
      });
    }
  }, []);

  return null; // This component doesn't render anything, just injects scripts
};
