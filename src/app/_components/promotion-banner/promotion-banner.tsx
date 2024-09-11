"use client";
import Link from "next/link";
import Countdown from "../countdown/countdown";
import { CldImage } from "next-cloudinary";

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
    subtitle: string; // Text color
    title: string; // Text color
    button: {
      background: string;
      text: string;
    }; // Button color
  };
}

const PromotionBanner = ({ data }: { data: PromotionBannerProps }) => {
  return (
    <div
      className={`flex h-[500px] px-[50px] py-[69px]`}
      style={{ backgroundColor: data.theme.backgroundColor }}
    >
      <div>
        <h2 className="mb-[32px]" style={{ color: data.theme.subtitle }}>
          {data.subtitle}
        </h2>
        <h1
          className="mb-[32px] text-[48px] font-semibold leading-[60px]"
          style={{ color: data.theme.title }}
        >
          {data.title}
        </h1>
        {data.timer.display && <Countdown endTime={data.timer.endTime} />}
        <Link
          href={data.action.url}
          style={{
            backgroundColor: data.theme.button.background,
            color: data.theme.button.text,
          }}
          className="button mt-[40px] flex h-[56px] w-[171px] items-center justify-center rounded-[4px] text-center"
        >
          {data.action.text}
        </Link>
      </div>
      <a href={data.banner.linkUrl}>
        <CldImage
          width={800}
          height={520}
          src={data.banner.imageUrl}
          alt={data.banner.altText}
        />
      </a>
    </div>
  );
};

export default PromotionBanner;
