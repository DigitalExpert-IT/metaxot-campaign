import firstRewardUrl from "@/assets/images/1-dollar-reward.png";
import secondRewardUrl from "@/assets/images/10-dollar-reward.png";
import thirdRewardUrl from "@/assets/images/30-dollar-reward.png";
import { BigNumber } from "ethers";

export interface ICardWithImageTitle {
  title: string;
  subtitle: string;
  price: BigNumber;
  imageUrl: string;
  description?: string;
  onClick: () => void;
}

export const RewardList = {
  "package-1": {
    title: "rewardCards.first.title",
    subtitle: "rewardCards.first.subtitle",
    imageUrl: firstRewardUrl,
  }, 
  "package-2": {
    title: "rewardCards.second.title",
    subtitle: "rewardCards.second.subtitle",
    imageUrl: secondRewardUrl,
  },
 "package-3": {
    title: "rewardCards.third.title",
    subtitle: "rewardCards.third.subtitle",
    imageUrl: thirdRewardUrl,
  },
  "package-4": {
    title: "rewardCards.first.title",
    subtitle: "rewardCards.first.subtitle",
    imageUrl: firstRewardUrl,
  }, 
  "package-5": {
    title: "rewardCards.second.title",
    subtitle: "rewardCards.second.subtitle",
    imageUrl: secondRewardUrl,
  },
 "package-6": {
    title: "rewardCards.third.title",
    subtitle: "rewardCards.third.subtitle",
    imageUrl: thirdRewardUrl,
  },
  "package-7": {
    title: "rewardCards.first.title",
    subtitle: "rewardCards.first.subtitle",
    imageUrl: firstRewardUrl,
  }, 
  "package-8": {
    title: "rewardCards.second.title",
    subtitle: "rewardCards.second.subtitle",
    imageUrl: secondRewardUrl,
  },
 "package-9": {
    title: "rewardCards.third.title",
    subtitle: "rewardCards.third.subtitle",
    imageUrl: thirdRewardUrl,
  },
};
