"use client";

import { useQRCode } from "next-qrcode";

export default function Home() {
  const { Canvas } = useQRCode();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Canvas
        text={"https://github.com/bunlong/next-qrcode"}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 500,
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
      />
    </main>
  );
}
