export default function Logo() {
   return (
     <div className="flex items-center gap-2 select-none">

        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background shadow-lg">
            <span className="font-black text-xs tracking-tighter">PS</span>
        </div>

        <div className="leading-tight">
            <div className="text-base font-black tracking-tight text-foreground">
                Product<span className="text-primary/80">Store</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Digital Afghan <span className="text-primary/60 tracking-normal">Market</span>
            </div>
        </div>

    </div>
   )
}