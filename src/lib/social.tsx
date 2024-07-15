import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export const getSocials = () => {
  const socials = [
    {
      title: "Email",
      href: "mailto:suhailsola@hotmail.com",
      icon: <SiGmail />,
    },
    {
      title: "Github",
      href: "https://github.com/suhailsola",
      icon: <SiGithub />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/suhailsolahuddin/",
      icon: <SiLinkedin />,
    },
  ];

  return socials;
};
