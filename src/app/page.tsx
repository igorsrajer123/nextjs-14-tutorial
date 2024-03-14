import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial - Codevolution",
    template: "",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome Home babY!</h1>
    </main>
  );
}
