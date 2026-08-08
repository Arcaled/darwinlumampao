export interface DomainConfig {
  domain: string;
  logoUrl: string;
  imageUrl: string;
  headline: string;
  tagline: string;
  ctaText: string;
  emailRecipient: string;
  themeColor: {
    primary: string;
    primaryHover: string;
    bgGradient: string;
    buttonBg: string;
  };
  features: string[];
}

export const defaultLandingConfig: DomainConfig = {
  domain: "default",
  logoUrl: "/assets/images/logo.png",
  imageUrl: "/assets/images/image.png",
  headline: "Scale Your Revenue and learn how Dropshipping help your Business Grow",
  tagline: "Expert Facebook Ads & Digital Marketing strategies custom-built to maximize your ROAS, scale operations, and dominate the digital marketplace.",
  ctaText: "Get Free Conference Seat Now",
  emailRecipient: "darlumampao@gmail.com",
  themeColor: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    bgGradient: "from-slate-50 via-blue-50/30 to-slate-100",
    buttonBg: "#2563eb"
  },
  features: [
    "High-converting landing pages built for scale",
    "ROI-focused Facebook Ad & Digital Marketing",
    "Data-backed product sourcing & dropshipping operations",
    "Omnichannel digital marketing & brand strategy"
  ]
};

export const clientConfigs: Record<string, Partial<DomainConfig>> = {
  "dropshippingpro.com": {
    domain: "dropshippingpro.com",
    headline: "Automated Dropshipping & High-Yield E-commerce Solutions",
    tagline: "We build, scale, and optimize your e-commerce funnels using advanced Facebook Advertising and smart sourcing pipelines.",
    themeColor: {
      primary: "bg-emerald-600",
      primaryHover: "hover:bg-emerald-700",
      bgGradient: "from-slate-50 via-emerald-50/30 to-slate-100",
      buttonBg: "#059669"
    }
  },
  "fbadsmastery.net": {
    domain: "fbadsmastery.net",
    headline: "Master Facebook Ads & Digital Marketing in 2026",
    tagline: "Stop burning ad budget. Deploy hyper-targeted social ad campaigns designed to convert visitors into raving lifetime customers.",
    themeColor: {
      primary: "bg-indigo-600",
      primaryHover: "hover:bg-indigo-700",
      bgGradient: "from-slate-50 via-indigo-50/30 to-slate-100",
      buttonBg: "#4f46e5"
    }
  }
};

/**
 * Resolves the configuration based on the incoming hostname.
 * Falls back to defaultLandingConfig.
 */
export function getLandingConfig(hostname: string | null): DomainConfig {
  if (!hostname) return defaultLandingConfig;

  // Normalize hostname (e.g., remove port or www prefix if present)
  let cleanHost = hostname.toLowerCase();
  if (cleanHost.includes(":")) {
    cleanHost = cleanHost.split(":")[0];
  }
  if (cleanHost.startsWith("www.")) {
    cleanHost = cleanHost.substring(4);
  }

  const clientConfig = clientConfigs[cleanHost];
  if (!clientConfig) {
    return defaultLandingConfig;
  }

  // Merge client config override with defaults
  return {
    ...defaultLandingConfig,
    ...clientConfig,
    domain: cleanHost,
    // Ensure nested objects like themeColor are also merged properly
    themeColor: {
      ...defaultLandingConfig.themeColor,
      ...(clientConfig.themeColor || {})
    }
  };
}
