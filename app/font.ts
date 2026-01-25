import localFont from "next/font/local";

export const ppMori = localFont({
  src: [
    {
      path: "../public/fonts/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-pp-mori",
  display: "swap",
});
