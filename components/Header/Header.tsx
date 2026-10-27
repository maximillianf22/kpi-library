export default function Header() {
    return (
        <header className="text-center mx-auto space-y-7">
            <h1 className="text-5xl font-black">Library</h1>
            <p>Browse for asset needed to report and present analysis.</p>
            
            <div>
                <button className="fixed top-4 right-4 rounded-lg bg-slate-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-600">
                    Request
                </button>
            </div>
        </header>
    )
}