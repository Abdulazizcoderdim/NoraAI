import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
  return (
    <div className="flex h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:inset-y-0 z-[80] bg-gray-900">
          <Sidebar/>
      </div>
      <main className="w-full">
        <Navbar/>
        {children}
      </main>
    </div>
  )
}
