const journeys = [
  {
    year: "2024",
    milestone: "Journey So far",
    description:
      "Starting from the bottom as a junior developer, trying to learn everything from the tech world is like diving into the deep sea, where there are LLMs, AIs, and many tech stacks that can make you feel overwhelmed. But things will just seem overwhelming as you set foot in the water without any preparation. Learning to take things slowly is also one of the ways to learn",
  },
  {
    year: "2023",
    milestone: "Career change",
    description:
      "Pivoted my career from an Electronic Engineer to a Software Developer",
    activity: [
      {
        name: "SET Program",
        description:
          "Its a 3-month bootcamp with Invoke Solution where I was taught how to use JavaScript which led to React, NodeJs and Express",
      },
    ],
  },
  {
    year: "2022",
    milestone: "Steady work",
    description:
      "Worked in Penang Island at client site as a Semiconductor Product Validation Engineer (which seems very long as I write it). I was very much focus on my work and found passion writing scripts to automate my work using Python",
  },
  {
    year: "2021",
    milestone: "Graduated and started my professional journey",
    description:
      "Started my professional career as MyStep Candidate with UST Global Sdn Bhd. Here they taught me the basics of programming using Java where my fundamentals was developed. (I like to believe so)",
  },
  {
    year: "2016",
    milestone: "Graduated Diploma",
    description:
      "Finished my studies at Universiti Teknologi Malaysia with a Diploma in Electronic Engineering",
  },
];

export default function Journey() {
  return (
    <section className="my-12 rounded px-2 py-4">
      <h3 className="text-center">My Journey</h3>
      <div>
        {journeys.map((journey, index) => (
          <div
            key={`journey-${index}`}
            className="my-8 flex flex-col items-center"
          >
            <h6 className="mb-4 w-max rounded-md border px-4 py-2">
              {/* <h6 className="mb-4 w-max rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white"> */}
              {journey.year}
            </h6>
            <ul className="flex flex-col gap-12">
              <li className="flex flex-col gap-2">
                <h4>{journey.milestone}</h4>
                <p>{journey.description}</p>
                {journey.activity && (
                  <ul className="px-3">
                    {journey.activity.map((activity, index) => (
                      <li
                        key={`activity-${index}`}
                        className="flex flex-col gap-2"
                      >
                        <h5>{activity.name}</h5>
                        <p>{activity.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
