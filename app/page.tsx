import { AssetSection } from "@/components/AssetSection"
import { Header } from "@/components/Header"
import { LibraryTabs } from "@/components/LibraryTabs"
import { LibrarySearchInput } from "../components/LibrarySearchInput"

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto text-black flex min-h-screen space-y-10 flex-col p-9 w-full">
      <Header />

      <div className="w-full">
        <LibrarySearchInput />
        <LibraryTabs />
      </div>

      <AssetSection title="Featured" description="Curated top picks from this week" />
      <AssetSection title="Trending" description="Most popular by community" itemBackground={false} />
    </main>
  );
}
