interface Career {
  company: string;
  position: string;
  url?: string;
  start: string;
  end: string;
  logo?: string;
  description?: string;
  type: JobType;
}
type JobType = "fulltime" | "parttime" | "contract" | "internship";

const careers: Career[] = [
  {
    company: "Invoke Solution",
    position: "Software Developer",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "fulltime" as JobType,
  },
  {
    company: "UST Global Sdn Bhd",
    position: "Semiconductor Product Validation Engineer",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "fulltime" as JobType,
  },
  {
    company: "UST Global Sdn Bhd",
    position: "MyStep Apprenticeship",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "contract" as JobType,
  },
  {
    company: "Pau Pak Ngah",
    position: "Sales Part Timer",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "parttime" as JobType,
  },
  {
    company: "Shell",
    position: "Cashier and Pump Attendant",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "parttime" as JobType,
  },
  {
    company: "Caffe Benne",
    position: "Barista",
    url: "",
    start: "July 2023",
    end: "Present",
    logo: "",
    description: "",
    type: "parttime" as JobType,
  },
];

export default function Career() {
  return (
    <section className="my-12 rounded px-2 py-4">
      <h3 className="text-left">Career</h3>
      <div>
        {careers.map((career, index) => (
          <div key={`career-${index}`} className="items-left my-8 flex gap-4">
            <div>logo</div>
            <div className="flex flex-col">
              <h4 className="mb-4 w-max">
                {/* <h4 className="mb-4 w-max rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white"> */}
                {career.position}
              </h4>

              <div className="flex flex-col gap-2">
                <h6 className="font-normal">
                  <strong>{career.company}</strong>, {career.start} -{" "}
                  {career.end}
                </h6>
                <p>{career.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
