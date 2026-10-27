import LibrarySearchInput from "../components/LibrarySearchInput"
import { AssetSection } from "@/components/AssetSection"

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto text-black flex min-h-screen space-y-10 flex-col p-9 w-full">
      <header className="text-center mx-auto space-y-7">
        <h1 className="text-5xl font-black">Library</h1>
        <p>Browse for asset needed to report and present analysis.</p>
        <div >
        <button className="fixed top-4 right-4 rounded-lg bg-slate-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-600">
          Request
        </button>
        </div>
      </header>

      <div className="w-full">
        <LibrarySearchInput />
        <nav className="mt-8 bg-slate-100 rounded-md">
          <ul className="flex w-full justify-between p-1 space-x-1 text-slate-400 font-medium">
            <li className="py-2 mx-auto text-black bg-white rounded-md w-full text-center">Featured</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">KPI</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">Layouts</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">Storyboards</li>
          </ul>
        </nav>
      </div>

      <AssetSection title="Featured" description="Curated top picks from this week" />
      <AssetSection title="Trending" description="Most popular by community" itemBackground={false}/>
    </main>
  );
}
