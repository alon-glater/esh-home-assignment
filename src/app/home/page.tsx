import Image from "next/image";
import { Landing } from "@/components/Landing";

export default function Home() {
  return (
    <main style={{ height: "100%" }}>
      <Image
        fill
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
        alt="background"
        style={{
          filter: "brightness(34%)",
        }}
      />
      <Landing />
    </main>
  );
}
