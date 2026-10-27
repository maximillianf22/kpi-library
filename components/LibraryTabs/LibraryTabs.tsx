export default function LibraryTabs() {
    return (
        <nav className="mt-8 bg-slate-100 rounded-md">
            <ul className="flex w-full justify-between p-1 space-x-1 text-slate-400 font-medium">
                <li className="py-2 mx-auto text-black bg-white rounded-md w-full text-center">Featured</li>
                <li className="py-2 mx-auto rounded-lg w-full text-center">KPI</li>
                <li className="py-2 mx-auto rounded-lg w-full text-center">Layouts</li>
                <li className="py-2 mx-auto rounded-lg w-full text-center">Storyboards</li>
            </ul>
        </nav>
    )
}