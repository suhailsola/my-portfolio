import Career from "@/components/layout/layout/section/Career";

export default function About() {
  return (
    <>
      <div className="mx-8">
        <div>
          <h1>
            Hi, as you know the name is{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Suhail
            </span>
          </h1>
          <h3>Seems like you'd like to know more about me so here goes...</h3>
        </div>
        <div>
          <p>
            I am a Full Stack Developer, currently focusing on my frontend
            skills as a developer. Although my interest and starting point was
            backend developer.
            <br />
            <br />
            Circumstances has required me to focus on the frontend development.
            As I learn and adapt to the current situation, it piqued my interest
            to create web applications that focuses on the UX. I, myself am not
            very creative to design the UI part but I like to give and get
            feedback from the UX side of the application. <br />
            <br />I created this portfolio as a way to write and showcase my
            skills as a developer. Although I am still new and learning, I would
            like to create and develop things that will be useful to others.
          </p>
        </div>
        <Career />
      </div>
    </>
  );
}
