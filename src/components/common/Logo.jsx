export default function Logo() {
   return (
     <div className="flex items-center gap-2 select-none">

        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <span className="font-bold text-sm">PS</span>
        </div>

        <div className="leading-tight">
            <div className="text-sm font-extrabold text-slate-900">
                Product Store
            </div>
            <div className="text-xs font-semibold text-slate-500">
                Digital Afghan Marketplace
            </div>
        </div>

    </div>
   )
}