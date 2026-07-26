import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Brands", href: "/brands" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <>
      <div className="bg-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <div>
            📍 Plot No.312, Shop No.5-B, Kurla West, Mumbai
          </div>

          <div className="flex gap-6">
            <a href="tel:7977709400">
              📞 7977709400
            </a>

            <a href="tel:8928167041">
              📞 8928167041
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <Link
            href="/"
            className="text-3xl font-bold text-blue-700"
          >
            NEXABLU
          </Link>

          <nav>

            <ul className="hidden md:flex gap-8 font-medium">

              {menu.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </nav>

          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
          >
            Get Quote
          </a>

        </div>

      </header>
    </>
  );
}
