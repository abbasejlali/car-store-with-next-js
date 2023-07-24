import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/cars");
  }, []);
  return (
    <>
      <h2>Car Store</h2>
    </>
  );
}
