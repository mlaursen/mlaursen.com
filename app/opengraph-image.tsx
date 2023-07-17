import { ImageResponse } from "next/server";
import Page from "./page";

export const runtime = "edge";
export const alt = "Mikkel Laursen";
export const size = {
  height: 630,
  width: 1200,
};
export const contentType = "image/png";

const getRobotoFlex = async (): Promise<ArrayBuffer> => {
  const response = await fetch(
    new URL("./RobotoFlex-Regular.ttf", import.meta.url)
  );

  return response.arrayBuffer();
};

export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(<Page />, {
    ...size,
    fonts: [
      {
        name: "Roboto",
        data: await getRobotoFlex(),
        style: "normal",
        weight: 400,
      },
    ],
  });
}
