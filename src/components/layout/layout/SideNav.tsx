import Link from "next/link";
import navigation from "@/lib/nav";
import { useRouter } from "next/router";
import { getSocials } from "@/lib/social";

export default function SideNav() {
  const { pathname } = useRouter();
  const socials = getSocials();
  return (
    <>
      <section className="sticky left-0 top-0 flex max-h-[92vh] w-[250px] flex-col justify-end gap-8 overflow-y-auto px-4 py-20 transition-all">
        <nav className="text-lg font-bold">
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center justify-end gap-4"
              >
                <Link
                  href={item.path}
                  data-active={pathname === item.path}
                  className="flex flex-row justify-end gap-4 border-r-4 border-black py-2 pr-6 text-right text-black transition-all duration-300 ease-in-out hover:border-green-800 hover:text-green-800 data-[active=true]:border-green-800 data-[active=true]:text-green-800"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-end gap-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-1 text-2xl text-slate-500 transition-all duration-300 ease-in-out hover:text-slate-900">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
