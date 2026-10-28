import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import ModernPublications from "@/components/ModernPublications";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Publications & Research Papers | Dang Minh Duc",
  description: "Peer-reviewed scientific publications on UWB indoor positioning, state estimation algorithms (EKF, UKF, PF), and AMR localization.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#06090f] text-slate-300">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/publications" currentPageName="PUBLICATIONS" />
        <ModernPublications />
        <SubpageFooterNav currentPath="/publications" />
      </main>

      <ScrollToTop />
    </div>
  );
}
