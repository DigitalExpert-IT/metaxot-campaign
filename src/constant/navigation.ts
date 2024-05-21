interface INavChild {
  title: string;
  link: string;
}

export interface INavigation {
  name: string;
  link?: string;
  children?: INavChild[];
}

export const Navigation: Array<INavigation> = [
  {
    name: "Download",
    link: "#Download",
  },
  {
    name: "FAQ",
    link: "#FAQ",
  },
  {
    name: "Backer",
    link: "#Backer",
  },
];

export const FooterNav: Array<INavigation> = [
  {
    name: "FAQ",
    link: "#FAQ",
  },
  {
    name: "Community",
    link: "#Community",
  },
  {
    name: "Backer",
    link: "#Backer",
  },
  {
    name: "Download",
    link: "#Download",
  },
]
