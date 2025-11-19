import { useState, useEffect } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { LiveChat } from "@/components/LiveChat";
import { Gift, Tag, TrendingUp, Sparkles, MousePointerClick } from "lucide-react";
import { ctaButtonConfig, themeConfig } from "@/config/livestream-config";

// Helper function to get CTA button styles
const getCtaButtonStyles = () => {
  const config = ctaButtonConfig;

  // Determine background color
  let bgColor = "bg-white/95";
  let textColor = "text-black";
  let hoverBg = "hover:bg-white";

  if (config.color.red) {
    bgColor = "bg-red-600";
    textColor = "text-white";
    hoverBg = "hover:bg-red-700";
  } else if (config.color.blue) {
    bgColor = "bg-blue-600";
    textColor = "text-white";
    hoverBg = "hover:bg-blue-700";
  } else if (config.color.gray) {
    bgColor = "bg-gray-600";
    textColor = "text-white";
    hoverBg = "hover:bg-gray-700";
  } else if (config.color.black) {
    bgColor = "bg-black";
    textColor = "text-white";
    hoverBg = "hover:bg-gray-900";
  } else if (config.color.white) {
    bgColor = "bg-white/95";
    textColor = "text-black";
    hoverBg = "hover:bg-white";
  }

  // Determine effects
  const effects: string[] = [];
  if (config.effects.pulse) effects.push("cta-pulse");
  if (config.effects.glow) effects.push("cta-glow");
  if (config.effects.shake) effects.push("cta-shake");
  if (config.effects.bounce) effects.push("cta-bounce");
  if (config.effects.float) effects.push("cta-float");

  return {
    bgColor,
    textColor,
    hoverBg,
    effects: effects.join(" "),
  };
};

// Helper function to get CTA button icon
const getCtaButtonIcon = () => {
  const config = ctaButtonConfig;

  if (config.icon.gift) return Gift;
  if (config.icon.tag) return Tag;
  if (config.icon.trending) return TrendingUp;
  if (config.icon.sparkles) return Sparkles;

  // Default to click icon
  return MousePointerClick;
};

const Index = () => {
  const [showCtaButton, setShowCtaButton] = useState(false);

  // Show CTA button after delay
  useEffect(() => {
    if (ctaButtonConfig.enabled) {
      const timeout = setTimeout(() => {
        setShowCtaButton(true);
      }, ctaButtonConfig.delayInSeconds * 1000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleCtaClick = () => {
    if (ctaButtonConfig.link) {
      window.open(ctaButtonConfig.link, "_blank");
    }
  };

  const ctaButtonStyles = getCtaButtonStyles();
  const CtaIcon = getCtaButtonIcon();

  return (
    <div className="w-full h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* VIDEO SECTION - Mobile: full width with 16:9 ratio, Desktop: 2/3 width, full height */}
      <div className="w-full md:w-2/3 flex-shrink-0 md:flex-shrink-1 bg-black flex items-center justify-center" style={{ height: 'calc(100vw * 9 / 16)' }}>
        <VideoPlayer />
      </div>

      {/* CHAT SECTION - Mobile: full width flex-1, Desktop: 1/3 width full height */}
      <div className={`w-full md:w-1/3 flex-1 md:flex-1 overflow-hidden flex flex-col min-h-0 ${themeConfig.darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <LiveChat />
      </div>

      {/* CTA Button - Full Screen Center */}
      {showCtaButton && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <button
            onClick={handleCtaClick}
            className={`pointer-events-auto px-8 py-3 rounded-lg font-semibold transition-all ${ctaButtonStyles.bgColor} ${ctaButtonStyles.textColor} ${ctaButtonStyles.hoverBg} ${ctaButtonStyles.effects} shadow-lg`}
          >
            <div className="flex items-center gap-2">
              <CtaIcon className="w-5 h-5" />
              <span>{ctaButtonConfig.text}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
