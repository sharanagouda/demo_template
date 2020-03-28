import * as Styles from "./styles.css";
import * as M from "@discovery/prelude/data/maybe";
import {
  PlayWithLabel,
  PlayWithLabelVariants
} from "../../atoms/play-with-label/";
import { Typography, Tags, HeaderVariants } from "../../atoms/typography";
import { Link } from "../../atoms/link";
import { PlaceholderImage } from "../../atoms/placeholder-image";
import { RenderMaybe } from "@discovery/components-luna/src/utils/render-maybe";
import * as Images from "@discovery/sonic-api-ng/src/api/cms/images";
import { SonicImage } from "@discovery/components-luna/src/components/atoms/image";

export type Props = {
  name: string;
  image?: Images.Attributes.Attributes;
  ctaLabelM?: M.Maybe<string>;
  descriptionM?: M.Maybe<string>;
  route?: string;
  length?: number;
  premium?: boolean;
};

type ContentCardProp = {
  name: string;
  ctaLabelM: M.Maybe<string>;
  descriptionM: M.Maybe<string>;
};

const CarouselContentCard = ({
  name,
  ctaLabelM,
  descriptionM
}: ContentCardProp) => {
  return (
    <>
      <Typography
        classNameM={M.of(Styles.name)}
        variant={HeaderVariants.headingThree}
        tag={Tags.h3}
      >
        {name}
      </Typography>
      <RenderMaybe>
        {M.map(
          description => (
            <Typography
              classNameM={M.of(Styles.description)}
              variant={HeaderVariants.headingFour}
              tag={Tags.h4}
            >
              {description}
            </Typography>
          ),
          descriptionM
        )}
      </RenderMaybe>

      {!M.equals(ctaLabelM, M.of(undefined)) && (
        <div className={Styles.watchContainer}>
          <PlayWithLabel
            variant={PlayWithLabelVariants.smallLabel}
            labelM={ctaLabelM}
          />
        </div>
      )}
    </>
  );
};

export const CarouselItem = ({
  ctaLabelM = M.empty(),
  route = "",
  image,
  name,
  descriptionM = M.empty(),
  premium
}: Props) => {
  return (
    <Link classNameM={M.of(Styles.container)} href={route}>
      <div className={premium ? Styles.preimiumMask : Styles.mask}>
        <div className={Styles.maskLeft}></div>
      </div>
      <div className={Styles.blurImageWrapper}>
        <PlaceholderImage />
        {image && (
          <SonicImage
            image={image}
            imageSizes={{
              default: [100, "vw"],
              maxWidthMediaQueries: [
                [699, "px", 320, "px"],
                [1023, "px", 440, "px"],
                [1439, "px", 600, "px"],
                [2559, "px", 800, "px"]
              ]
            }}
            extraImageWidths={[320, 480, 700]}
            className={Styles.blurBackgroundimage}
            fallbackImageWidth={900}
          />
        )}
      </div>
      <div
        className={premium ? Styles.premiumImageWrapper : Styles.imageWrapper}
      >
        <PlaceholderImage />
        {image && (
          <SonicImage
            image={image}
            imageSizes={{
              default: [100, "vw"],
              maxWidthMediaQueries: [
                [699, "px", 320, "px"],
                [1023, "px", 440, "px"],
                [1439, "px", 600, "px"],
                [2559, "px", 800, "px"]
              ]
            }}
            extraImageWidths={[320, 480, 700]}
            className={premium ? Styles.premiumImage : Styles.image}
            fallbackImageWidth={900}
          />
        )}
      </div>
      <div className={Styles.blurContentWrapper}>
        <div className={Styles.Innerwrapper}>
          <div className={Styles.contentWrapper2}>
            <CarouselContentCard
              name={name}
              ctaLabelM={ctaLabelM}
              descriptionM={descriptionM}
            />
          </div>
          <div className={Styles.imageWrapper2}>
            {image && (
              <SonicImage
                image={image}
                imageSizes={{
                  default: [100, "vw"],
                  maxWidthMediaQueries: [
                    [699, "px", 320, "px"],
                    [1023, "px", 440, "px"],
                    [1439, "px", 600, "px"],
                    [2559, "px", 800, "px"]
                  ]
                }}
                extraImageWidths={[320, 480, 700]}
                className={Styles.image}
                fallbackImageWidth={900}
              />
            )}
          </div>
        </div>
      </div>
      <div className={Styles.contentWrapper}>
        <CarouselContentCard
          name={name}
          ctaLabelM={ctaLabelM}
          descriptionM={descriptionM}
        />
      </div>
    </Link>
  );
};
