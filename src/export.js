import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
