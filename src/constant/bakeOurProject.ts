import firstRewardUrl from "@/assets/images/1-dollar-reward.png";
import secondRewardUrl from "@/assets/images/10-dollar-reward.png";
import thirdRewardUrl from "@/assets/images/30-dollar-reward.png";

export interface ICardWithImageTitle {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const RewardList = [
  {
    title: "rewardCards.first.title",
    subtitle: "rewardCards.first.subtitle",
    imageUrl: firstRewardUrl,
  },
  {
    title: "rewardCards.second.title",
    subtitle: "rewardCards.second.subtitle",
    imageUrl: secondRewardUrl,
  },
  {
    title: "rewardCards.third.title",
    subtitle: "rewardCards.third.subtitle",
    imageUrl: thirdRewardUrl,
  },
];
