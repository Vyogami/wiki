import {
  Bot,
  CodeXml,
  TerminalSquare,
  BrainCircuit,
  TramFront,
} from "lucide-react";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const projectsData = [
  {
    title: "Vadi",
    description:
      "A simple, interpreted and dynamically-typed programming language.",
    link: "https://github.com/vyogami/vadi",
    icon: <CodeXml />,
  },
  {
    title: "Amibot-tg",
    description: "Telegram bot for Amizone, powered b y the go-amizone API",
    link: "https://github.com/asetalias/amibot-tg",
    icon: <Bot />,
  },
  {
    title: "Gritlle",
    description:
      "OS agnostic package fuzzy finder TUI for apt, dnf, yay, winget and brew.",
    link: "",
    icon: <TerminalSquare />,
  },
  {
    title: "Amidroid",
    description:
      "Android application for go-amizone API with beautiful Material You UI 3.",
    link: "",
    icon: <FontAwesomeIcon icon={faAndroid} />,
  },
  {
    title: "Dorf",
    description:
      "Image categorization and deduplication system. It employs Golang for better performance.",
    link: "",
    icon: <BrainCircuit />,
  },
  {
    title: "Teas",
    description:
      "Transit Efficiency & Allocation System for optimizing resource allocation in metro.",
    link: "",
    icon: <TramFront />,
  },
];
