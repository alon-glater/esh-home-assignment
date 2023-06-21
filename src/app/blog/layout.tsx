import { BlogLayout } from "@/components/BlogLayout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <BlogLayout>{children}</BlogLayout>;
}
