'use client'

export default function Loader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 test">
            <div className="flex flex-col items-center gap-8">
                {/* Spinner de carga */}
                <div className="relative">
                    <div className="
            w-24 h-24 rounded-full border-8 
            border-t-violet-500 dark:border-t-yellow-300
            border-b-cyan-400 dark:border-b-pink-500
            border-l-yellow-300 dark:border-l-cyan-400
            border-r-neutral-300 dark:border-r-neutral-700
            animate-spin
          " />
                    <span className="
            absolute inset-0 flex items-center justify-center text-4xl font-bold font-[var(--font-vt323)] 
            bg-gradient-to-br 
            from-violet-500 via-cyan-500 to-yellow-300 
            dark:from-yellow-300 dark:via-pink-500 dark:to-cyan-400
            bg-clip-text text-transparent pointer-events-none select-none
          ">
                        ⏳
                    </span>
                </div>
                {/* Texto cargando */}
                <span className="
          text-2xl md:text-3xl font-bold font-[var(--font-vt323)] 
          bg-gradient-to-br 
          from-violet-500 via-cyan-500 to-yellow-300
          dark:from-yellow-300 dark:via-pink-500 dark:to-cyan-400
          bg-clip-text text-transparent tracking-widest animate-pulse select-none
        ">
                    {`Cargando...`}
                </span>
            </div>
        </div>
    );
}