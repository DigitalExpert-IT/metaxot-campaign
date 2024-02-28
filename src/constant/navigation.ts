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
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Backer",
    link: "#",
  },
];

export const FooterNav: Array<INavigation> = [
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Community",
    link: "#",
  },
  {
    name: "Backer",
    link: "#",
  },
  {
    name: "Download",
    link: "#",
  },
]
