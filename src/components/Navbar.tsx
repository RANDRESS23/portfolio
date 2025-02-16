import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "skills",
    "education",
  ]);

  const navItems: NavItem[] = [
    { name: "Sobre mi", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Educación", href: "#education" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-skin-muted transition-all ${
        isActive
          ? "active w-16 !bg-[rgb(var(--color))] h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-skin-base"
          : "text-skin-muted group-hover:text-skin-base"
      }`,
    };
  };

  return (
    <nav className="lg:flex hidden">
      <ul className="flex flex-col w-max text-start gap-4 uppercase text-xs font-medium">
        {navItems.map((item: NavItem) => {
          const { linkClass, indicatorClass, textClass } = getNavItemClasses(
            item.href
          );
          return (
            <li key={item.name} className="group">
              <a href={item.href} className={`py-3 ${linkClass}`}>
                <span className={indicatorClass}></span>
                <span className={textClass}>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}