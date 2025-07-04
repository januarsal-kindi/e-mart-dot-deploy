"use client";
type NavItemProps = {
  label: string;
  to: string;
};

function NavItem({ label, to }: NavItemProps) {
  const scrollToProductSection = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(to);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a
      className="text-gray-700 cursor-pointer hover:text-primary hover:border-b-1  hover:border-primary  transition-all duration-300"
      onClick={scrollToProductSection}
    >
      {label}
    </a>
  );
}
export default NavItem;
