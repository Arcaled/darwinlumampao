export interface DomainConfig {
  domain: string;
  logoUrl: string;
  imageUrl: string;
  headline: string;
  tagline: string;
  ctaText: string;
  emailRecipient: string;
  themeColor: {
    primary: string; // e.g. 'indigo-600'
    primaryHover: string;
    bgGradient: string;
  };
  features: string[];
}

export const defaultLandingConfig: DomainConfig = {
  domain: "default",
  logoUrl: "/assets/images/logo.png",
  imageUrl: "/assets/images/image.png",
  headline: "Scale Your E-commerce & Dropshipping Business To The Next Level",
  tagline: "Expert Facebook Ads & Digital Marketing strategies custom-built to maximize your ROAS, scale operations, and dominate the digital marketplace.",
  ctaText: "Get Free Marketing Strategy Consultation",
  emailRecipient: "darlumampao@gmail.com",
  themeColor: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    bgGradient: "from-slate-900 via-blue-950 to-slate-900"
  },
  features: [
    "High-converting landing pages built for scale",
    "ROI-focused Facebook & TikTok ad campaigns",
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
      bgGradient: "from-zinc-950 via-emerald-950 to-zinc-950"
    }
  },
  "fbadsmastery.net": {
    domain: "fbadsmastery.net",
    headline: "Master Facebook Ads & Digital Marketing in 2026",
    tagline: "Stop burning ad budget. Deploy hyper-targeted social ad campaigns designed to convert visitors into raving lifetime customers.",
    themeColor: {
      primary: "bg-indigo-600",
      primaryHover: "hover:bg-indigo-700",
      bgGradient: "from-slate-950 via-indigo-950 to-slate-950"
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
