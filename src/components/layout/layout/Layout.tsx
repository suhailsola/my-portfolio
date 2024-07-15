import Head from "next/head";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  const updatedTitle = title ? `${title} | suhailsola` : "suhailsola";
  return (
    <>
      <Head>
        <title>{updatedTitle}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center bg-green-400">
        <main className="flex w-full max-w-5xl flex-1 flex-row items-start justify-center">
          <div className="sticky top-0 hidden sm:flex">
            <SideNav />
          </div>
          <section className="flex flex-1 flex-col px-6 py-20">
            {children}
          </section>
        </main>
        <footer className="px-2 py-4 text-center">
          Made by suhailsola &copy; 2024
        </footer>
      </div>
    </>
  );
}
