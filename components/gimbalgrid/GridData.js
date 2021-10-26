import BlankWhite from "./gridboxes/BlankWhite";
import GBLogo from "./gridboxes/GBLogo";
import Letter from "./gridboxes/Letter";

const { default: DandelionPage } = require("../dandelion/DandelionPage");
const { default: PBLPage } = require("../pbl/PBLPage");
const { default: GBDandelion } = require("./gridboxes/GBDandelion");
const { default: GBPBL } = require("./gridboxes/GBPBL");
const { default: HamburgerMenu } = require("./gridboxes/HamburgerMenu");
const { default: Testimony } = require("./gridboxes/Testimony");
const { default: TestimonyFull } = require("./gridboxes/TestimonyFull");
const {
  TitleGroupDark,
  default: TitleGroup,
} = require("./gridboxes/TitleGroup");

const gimbalabs = [
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "G",
    },
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "i",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "m",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "b",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "a",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "l",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },

  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "a",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-2 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "b",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-3 row-span-1 `,
    gridBoxComponent: Letter,
    gridBoxProps: {
      l: "s",
    },
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
  },
  {
    disable: true,
    gridBoxStyle: ` col-span-1  md:col-span-1 row-span-1 `,
    gridBoxComponent: BlankWhite,
    gridBoxProps: {
      color: "bg-offWhite",
    },
  },
];

export const gridData = [
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-4 row-span-1    `,
    gridBoxComponent: GBLogo,
  },
  {
    disable: true,
    gridBoxStyle: `col-span-full sm:col-span-6 row-span-4    `,
    gridBoxComponent: TitleGroup,
  },
  {
    gridBoxStyle: "col-span-2 row-span-1 bg-black2-900",
    gridBoxComponent: HamburgerMenu,
    gridBoxProps: {},
  },
  {
    gridBoxComponent: GBPBL,
    gridBoxProps: {},
    gridBoxStyle: `col-span-full sm:col-span-6  row-span-3`,
    transitionColor: "bg-offWhite",
    fullPageComponent: PBLPage,
    fullPageProps: {
      text:
        "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
  },
  {
    disable: true,
    gridBoxStyle: `col-span-full  sm:col-span-5 row-span-2   `,
    gridBoxComponent: Testimony,
    gridBoxProps: {
      quote:
        "Hello and welcome to our community of developers, thinkers, experimenters, doers. We are glad to have you.",
      owner: "James",
    },
    fullPageComponent: TestimonyFull,
    fullPageProps: {
      text:
        "Hi, here is an opportunity to expand upon this testimonial and show some examples of projects or something.",
    },
  },
  {
    transitionColor: "gradient-yellow",
    gridBoxStyle: `col-span-full sm:col-span-7 row-span-3   `,
    gridBoxComponent: GBDandelion,
    gridBoxProps: {},
    fullPageComponent: DandelionPage,
    fullPageProps: {},
  },

  {
    gridBoxStyle: ` col-span-full sm:col-span-8 row-span-4   `,
    gridBoxComponent: TitleGroupDark,
    gridBoxProps: {},
  },

  // 6-25
  ...gimbalabs,
];
