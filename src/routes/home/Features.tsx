import Feature from "@/components/Feature";
import { Box } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { FeatureList, IFeatureList } from "@/constant/featureList";

const Features: React.FC = () => {
  const { t } = useTranslation();

  const transformFeature = (feature: IFeatureList) => {
    const mapSubContent = feature?.texts.subContent?.map((sub) => (
      <Trans i18nKey={sub} components={{ b: <b /> }} />
    ));

    return {
      title: t(feature.title),
      imgUrl: feature.imageUrl,
      texts: {
        mainContent: feature?.texts?.mainContent
          ? t(feature?.texts?.mainContent)
          : "",
        subContent: mapSubContent ?? [],
      },
      direction: feature.direction,
    };
  };

  const transformedFeatureList = FeatureList.map((feature) =>
    transformFeature(feature)
  );

  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      {transformedFeatureList.map((feature) => (
        <Feature
          title={feature.title}
          texts={feature.texts}
          imageUrl={feature.imgUrl}
          direction={feature.direction}
        />
      ))}
    </Box>
  );
};

export default Features;
