import metaxotWorldUrl from "@/assets/images/metaxot-world.png";
import agricultureUrl from "@/assets/images/agriculture.png";
import miningUrl from "@/assets/images/mining.png";
import farmingUrl from "@/assets/images/farming.png";
import fisheryUrl from "@/assets/images/fishery.png";
import workUrl from "@/assets/images/work.png";
import tournamentUrl from "@/assets/images/tournament.png";
import craftUrl from "@/assets/images/craft.png";
import skillTreeUrl from "@/assets/images/skill-tree.png";
import buildingUrl from "@/assets/images/building.png";
import followAndLikeUrl from "@/assets/images/follow-and-like.png";
import robopetUrl from "@/assets/images/robopet.png";
import questUrl from "@/assets/images/quest.png";
import currencyUrl from "@/assets/images/currency.png";
import { ReactNode } from "react";

type Texts = {
  mainContent?: ReactNode | string;
  subContent?: Array<ReactNode | string>;
};

export interface IFeature {
  title: string;
  direction: string;
  imageUrl?: string;
  texts: Texts;
}

export interface IFeatureList {
  title: string;
  imageUrl?: string;
  texts: {
    mainContent?: string;
    subContent?: Array<string>;
  };
  direction: string;
}

export const FeatureList = [
  {
    title: "metaxotWorld.title",
    imageUrl: metaxotWorldUrl,
    texts: {
      mainContent: "metaxotWorld.contents.main",
      subContent: [
        "metaxotWorld.contents.sub.1",
        "metaxotWorld.contents.sub.2",
      ],
    },
    direction: "column",
  },
  {
    title: "agriculture.title",
    imageUrl: agricultureUrl,
    texts: {
      mainContent: "agriculture.contents.main",
    },
    direction: "column",
  },
  {
    title: "mining.title",
    imageUrl: miningUrl,
    texts: {
      mainContent: "mining.contents.main",
    },
    direction: "column",
  },
  {
    title: "farming.title",
    imageUrl: farmingUrl,
    texts: {
      mainContent: "farming.contents.main",
    },
    direction: "column",
  },
  {
    title: "fishery.title",
    imageUrl: fisheryUrl,
    texts: {
      mainContent: "fishery.contents.main",
    },
    direction: "column",
  },
  {
    title: "work.title",
    imageUrl: workUrl,
    texts: {
      mainContent: "work.contents.main",
    },
    direction: "column",
  },
  {
    title: "tournament.title",
    imageUrl: tournamentUrl,
    texts: {
      mainContent: "tournament.contents.main",
    },
    direction: "row",
  },
  {
    title: "craft.title",
    imageUrl: craftUrl,
    texts: {
      mainContent: "craft.contents.main",
    },
    direction: "row",
  },
  {
    title: "skillTree.title",
    imageUrl: skillTreeUrl,
    texts: {
      mainContent: "skillTree.contents.main",
    },
    direction: "row",
  },
  {
    title: "building.title",
    imageUrl: buildingUrl,
    texts: {
      mainContent: "building.contents.main",
    },
    direction: "row",
  },
  {
    title: "followAndLike.title",
    imageUrl: followAndLikeUrl,
    texts: {
      mainContent: "followAndLike.contents.main",
    },
    direction: "row",
  },
  {
    title: "robopet.title",
    imageUrl: robopetUrl,
    texts: {
      mainContent: "robopet.contents.main",
    },
    direction: "row",
  },
  {
    title: "quest.title",
    imageUrl: questUrl,
    texts: {
      mainContent: "quest.contents.main",
    },
    direction: "row",
  },
  {
    title: "currency.title",
    imageUrl: currencyUrl,
    texts: {
      mainContent: "currency.contents.main",
    },
    direction: "row",
  },
  {
    title: "others.title",
    texts: {
      subContent: ["others.contents.sub.1", "others.contents.sub.2"],
    },
    direction: "column",
  },
];
