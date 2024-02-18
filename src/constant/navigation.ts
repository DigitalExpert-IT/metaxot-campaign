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
