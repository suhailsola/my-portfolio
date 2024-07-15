import Journey from "@/components/layout/layout/section/Journey";
import { getTechStack } from "@/lib/stacks";
import Head from "next/head";

export default function Home() {
  const tools = getTechStack({});
  return (
    <>
      <Head>
        <meta name="description" content="suhailsola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-8">
        <div>
          <h1>
            Hi, the name is{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Muhammad Suhail
            </span>
          </h1>
          <h2>I am a Full Stack Developer</h2>
          <h3>Currently working on my frontend development skills</h3>
        </div>

        <div className="my-12 rounded border border-black px-2 py-4">
          <h3 className="text-center">My Techstacks</h3>
          <div className="my-8 flex flex-row flex-wrap items-start justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="flex w-[10ch] flex-col items-center gap-4 text-center transition-all duration-300 ease-in-out hover:text-zinc-800"
              >
                <div
                  data-tool={tool.id}
                  className={`mb-3 flex items-center justify-center text-4xl transition-all duration-200 ease-in-out hover:scale-125 ${tool.className}`}
                >
                  {tool.icon}
                </div>
                <h6>{tool.title}</h6>
              </div>
            ))}
          </div>
        </div>
        <Journey />
      </div>
    </>
  );
}
