export const promotionBannerData = {
  subtitle: "Categories", // Short description or label for the banner
  title: "Enhance Your Music Experience", // Main headline or title
  timer: {
    endTime: "2024-09-28T23:59:35Z", // Use ISO 8601 format for date and time
    display: true, // Boolean to control whether to show the timer
  },
  action: {
    type: "buttonLink", // Type of action (could be 'buttonLink', 'button', 'link', etc.)
    url: "/", // URL or path for the action
    text: "Buy Now!", // Text for the button or link
  },
  banner: {
    imageUrl: "sfcbbvpy6hpzlaosn2jl.png", // URL for the banner image
    altText: "JBL Speaker", // Alt text for accessibility
    linkUrl: "https://google.com", // URL the banner links to
  },
  theme: {
    backgroundColor: "#000", // Background color of the banner
    subtitle: "#00FF66", // Text color
    title: "#ffffff",
    button: {
      background: "#00FF66",
      text: "#ffffff",
    }, // Button color
  },
};
