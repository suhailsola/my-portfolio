import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiSass,
  SiVercel,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPostcss,
  SiMui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiApollographql,
  SiPrisma,
  SiNestjs,
  SiStrapi,
  SiJira,
  SiGitlab,
  SiFigma,
  SiAdobexd,
  SiAwsamplify,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

export const enum Status {
  NOT_STARTED,
  LEARNING,
  HIATUS,
  ABORTED,
  COMFORT,
  IDLE,
}

export type Tool = {
  id: string;
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  status: Status;
  note?: string;
  category: "frontend" | "backend" | "database" | "devops" | "design";
  className?: React.ComponentProps<"div">["className"];
};

const tools: Tool[] = [
  {
    id: "react",
    title: "React",
    icon: <SiReact />,
    iconColor: "#61DBFB",
    status: Status.COMFORT,
    category: "frontend",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <SiNextdotjs />,
    iconColor: "#000000",
    status: Status.COMFORT,
    category: "frontend",
  },
  {
    id: "typescript",
    title: "Typescript",
    icon: <SiTypescript />,
    iconColor: "#3178C6",
    status: Status.LEARNING,
    category: "frontend" || "backend",
  },
  {
    id: "github",
    title: "Github",
    icon: <SiGithub />,
    iconColor: "#000000",
    status: Status.LEARNING,
    category: "devops",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: <SiNodedotjs />,
    iconColor: "#339933",
    status: Status.COMFORT,
    category: "backend",
  },
  {
    id: "express",
    title: "Express",
    icon: <SiExpress />,
    iconColor: "#000000",
    status: Status.COMFORT,
    category: "backend",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    icon: <SiMongodb />,
    iconColor: "#47A248",
    status: Status.LEARNING,
    category: "database",
  },
  {
    id: "apollographql",
    title: "Apollo GraphQL",
    icon: <SiApollographql />,
    iconColor: "#000000",
    status: Status.LEARNING,
    category: "backend",
  },
  {
    id: "prisma",
    title: "Prisma",
    icon: <SiPrisma />,
    iconColor: "#000000",
    status: Status.COMFORT,
    category: "backend",
  },
  {
    id: "figma",
    title: "Figma",
    icon: <SiFigma />,
    iconColor: "#000000",
    status: Status.COMFORT,
    category: "design",
  },
];

type Stack = "frontend" | "backend" | "database" | "devops" | "design" | null;

type GetTechStack = (props: {
  stack?: Stack;
  filter?: string[];
  filterOptiopns?: {
    status?: Status[];
  };
}) => Tool[];

export const getTechStack: GetTechStack = (props) => {
  const { stack, filter, filterOptiopns } = props;
  if (!stack && !filter && !filterOptiopns) {
    return tools;
  }
};
