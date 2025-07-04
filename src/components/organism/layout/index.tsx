import Navbar from "@/components/molecules/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
}
