export type NavigationItem = { label: string; href: string; children?: { label: string; href: string; description?: string }[] };
export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" }, 
  { label: "Services", href: "/services", },
  { label: "Pricing", href: "/pricing", }, 
  { label: "Process", href: "/process" }, 
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
