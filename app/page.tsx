export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto text-black flex min-h-screen space-y-10 flex-col p-24 h-20 w-full">
      <header className="text-center mx-auto space-y-7">
        <h1 className="text-3xl font-bold">Library</h1>
        <p>Browse for asset needed to report and present analysis.</p>
      </header>

      <div className="w-full">
        <search>
          <form>
            <input type="text" name="" id="" placeholder="Type to search..." className="w-full h-12 bg-red-white border rounded-md border-2 border-slate-200 px-3" />
          </form>
        </search>
        <nav className="mt-8 bg-slate-100 rounded-md">
          <ul className="flex w-full justify-between p-1 space-x-1 text-slate-400 font-medium">
            <li className="py-2 mx-auto text-black bg-white rounded-md w-full text-center">Featured</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">KPI</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">Layouts</li>
            <li className="py-2 mx-auto rounded-lg w-full text-center">Storyboards</li>
          </ul>
        </nav>
      </div>

      <section>
        <h1 className="text-3xl font-bold">Featured</h1>
        <p className="text-slate-400">Curated top picks from this week</p>

        <div className="grid grid-cols-2 gap-4 mt-8">
         <article class="bg-white flex p-3 rounded-md border boder-slate-50">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
         </article>
         <article class="bg-white flex p-3 rounded-md border boder-slate-50">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
          <article class="bg-white flex p-3 rounded-md border boder-slate-50">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
          <article class="bg-white flex p-3 rounded-md border boder-slate-50">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold">Trnding</h1>
        <p className="text-slate-400">Most popular by community</p>

        <div className="grid grid-cols-2 gap-4 mt-8">
         <article class="flex p-3 rounded-md">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
         </article>
         <article class="flex p-3 rounded-md">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
          <article class="flex p-3 rounded-md">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
          <article class="flex p-3 rounded-md">
          <div className="h-full w-24 items-center flex bg-slate-200 rounded-md">
            <i>hola</i>
          </div>
          <div className="space-y-1 ml-3">
            <h3 className="font-medium">Item Name</h3>
            <p className="text-sm">Short description of the item goaes nicely here.</p>
            <p className="text-xs text-slate-400">06/27/2024</p>
          </div>
          </article>
        </div>
      </section>
    </main>
  );
}
