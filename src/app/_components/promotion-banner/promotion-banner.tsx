import Image from "next/image";
import Countdown from "../countdown/countdown";

interface PromotionBannerProps {
  subtitle: string; // Short description or label for the banner
  title: string; // Main headline or title
  timer: {
    endTime: string; // Use ISO 8601 format for date and time
    display: boolean; // Boolean to control whether to show the timer
  };
  action: {
    type: string; // Type of action (could be 'buttonLink', 'button', 'link', etc.)
    url: string;
    text: string; // Text for the button or link
  };
  banner: {
    imageUrl: string; // URL for the banner image
    altText: string; // Alt text for accessibility
    linkUrl: string; // URL the banner links to
  };
  theme: {
    backgroundColor: string; // Background color of the banner
    textColor: string; // Text color
    buttonColor: string; // Button color
  };
}

const PromotionBanner = ({ data }: { data: PromotionBannerProps }) => {
  return (
    <div style={{ backgroundColor: data.theme.backgroundColor }}>
      <p style={{ color: data.theme.textColor }}>{data.subtitle}</p>
      <h1 style={{ color: data.theme.textColor }}>{data.title}</h1>
      {data.timer.display && <Countdown endTime={data.timer.endTime} />}
      <a
        href={data.action.url}
        style={{ backgroundColor: data.theme.buttonColor }}
      >
        {data.action.text}
      </a>
      <a href={data.banner.linkUrl}>
        <Image
          width={600}
          height={420}
          src={data.banner.imageUrl}
          alt={data.banner.altText}
        />
      </a>
    </div>
  );
};

export default PromotionBanner;
