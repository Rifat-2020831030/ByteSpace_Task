export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterLinks = {
  browse1: FooterLinkItem[];
  browse2: FooterLinkItem[];
  platform: FooterLinkItem[];
  legal: FooterLinkItem[];
};

export class FooterService {
  static async getFooterLinks(): Promise<FooterLinks> {
    // Repilicating fetch from a database or CMS.
    return {
      browse1: [
        { label: "Featured Courses", href: "#" },
        { label: "Featured Categories", href: "#" },
        { label: "Business", href: "#" },
        { label: "IT", href: "#" },
        { label: "Design", href: "#" },
      ],
      browse2: [
        { label: "Development", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Finance", href: "#" },
        { label: "Sport", href: "#" },
      ],
      platform: [
        { label: "Become a Creator", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Help", href: "#" },
        { label: "About", href: "#" },
      ],
      legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookies Settings", href: "#" },
      ],
    };
  }
}
