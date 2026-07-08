// src/utils/iconMap.jsx
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
  FaJsSquare,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiOpencv,
  SiJenkins,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";

export const iconMap = {
  react: FaReact,
  javascript: FaJsSquare,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  nodejs: FaNodeJs,
  express: SiExpress,
  java: FaJava,
  spring: SiSpringboot,
  api: TbApi,
  mysql: SiMysql,
  oracle: FaDatabase,
  mongodb: SiMongodb,
  redis: SiRedis,
  ai: BsRobot,
  opencv: SiOpencv,
  python: FaPython,
  git: FaGitAlt,
  docker: FaDocker,
  aws: FaAws,
  jenkins: SiJenkins,
  vscode: VscVscode,
  postman: SiPostman,
  typescript: SiTypescript,
};

// Brand colors — used to render each icon in its recognizable real-world color
export const iconColorMap = {
  react: "#61DAFB",
  javascript: "#F7DF1E",
  css3: "#264DE4",
  tailwind: "#38BDF8",
  redux: "#764ABC",
  nodejs: "#3C873A",
  express: "#A0A0A0",
  java: "#E76F00",
  spring: "#6DB33F",
  api: "#A78BFA",
  mysql: "#4479A1",
  oracle: "#F80000",
  mongodb: "#47A248",
  redis: "#DC382D",
  ai: "#EC4899",
  opencv: "#5C3EE8",
  python: "#3776AB",
  git: "#F05032",
  docker: "#2496ED",
  aws: "#FF9900",
  jenkins: "#D33833",
  vscode: "#007ACC",
  postman: "#FF6C37",
  typescript: "#3178C6",
};

export function getSkillIcon(iconKey) {
  const IconComponent = iconMap[iconKey];
  return IconComponent ? <IconComponent /> : null;
}

export function getSkillColor(iconKey) {
  return iconColorMap[iconKey] || "var(--color-accent-primary)";
}
