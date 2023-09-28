import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="h-16 flex gap-24 p-5 border-b border-white justify-center mb-8">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} className="text-lg hover:text-blue-400">
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
