import { RiRobot3Line } from "react-icons/ri";
import { PiRainbowCloudBold } from "react-icons/pi";
import { GiProcessor } from "react-icons/gi";
import { GiCyberEye } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";

const petals = [
  {
    id: 1,
    color: "#f39c12",
    label: "Аналитика больших данных",
    text: "Аналитика больших данных",
    icon: IoMdAnalytics,
  },
  {
    id: 2,
    color: "#e74c3c",
    label: "Кибербезопасность",
    text: "Кибербезопасность",
    icon: GiCyberEye,
  },
  {
    id: 3,
    color: "#8e44ad",
    label: "IoT",
    text: "IoT",
    icon: GiProcessor,
  },
  {
    id: 4,
    color: "#2980b9",
    label: "Облачные технологии",
    text: "Облачные технологии",
    icon: PiRainbowCloudBold,
  },
  {
    id: 5,
    color: "#27ae60",
    label: "ИИ",
    text: "ИИ",
    icon: RiRobot3Line,
  },
];

export { petals };
