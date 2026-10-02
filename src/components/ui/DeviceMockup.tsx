/**
 * DeviceMockup — Pure CSS laptop + mobile frame showing
 * a stylised preview of the Nexora property platform.
 * Used in the Hero and Featured Work sections.
 */
export function DeviceMockup() {
  return (
    <div className="relative flex items-end justify-center select-none" aria-hidden>
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-[oklch(0.55_0.22_255/0.12)] blur-3xl" />
      </div>

      {/* Laptop frame */}
      <div className="relative w-80 sm:w-96">
        {/* Screen bezel */}
        <div className="rounded-xl bg-[oklch(0.20_0.04_260)] p-1.5 shadow-2xl ring-1 ring-black/20">
          {/* Screen content */}
          <div className="relative overflow-hidden rounded-lg bg-[oklch(0.18_0.06_255)] aspect-[16/10]">
            {/* Simulated browser chrome */}
            <div className="flex items-center gap-1.5 bg-[oklch(0.22_0.04_260)] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <div className="ml-2 flex-1 rounded bg-[oklch(0.28_0.03_260)] px-3 py-0.5 text-[9px] text-[oklch(0.65_0.01_260)]">
                nexora.com
              </div>
            </div>

            {/* Mock site content */}
            <div className="relative h-full bg-gradient-to-br from-[oklch(0.25_0.06_255)] to-[oklch(0.18_0.04_240)] p-4">
              {/* Nav mock */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-[9px] font-bold text-white tracking-wide">Nexora</div>
                <div className="flex gap-2">
                  {["Home", "Properties", "Agents", "Contact"].map((l) => (
                    <span key={l} className="text-[7px] text-white/60">{l}</span>
                  ))}
                </div>
              </div>

              {/* Hero text */}
              <div className="mb-3">
                <div className="text-[11px] font-bold text-white leading-tight">
                  Build Your<br />Dream Space
                </div>
                <div className="mt-1 text-[7px] text-white/60 max-w-[100px]">
                  Find your perfect property with expert guidance.
                </div>
                <div className="mt-2 inline-block rounded-full bg-[oklch(0.55_0.22_255)] px-2 py-0.5 text-[7px] font-semibold text-white">
                  Get Started
                </div>
              </div>

              {/* Property card mock */}
              <div className="absolute bottom-3 right-3 w-24 rounded-lg bg-white/10 backdrop-blur p-2 ring-1 ring-white/20">
                <div className="h-10 rounded bg-[oklch(0.55_0.22_255/0.4)] mb-1" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/40 mb-1" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop hinge + base */}
        <div className="mx-auto mt-0.5 h-2 w-5/6 rounded-b-sm bg-[oklch(0.22_0.04_260)]" />
        <div className="mx-auto h-1 w-full rounded-b-lg bg-[oklch(0.20_0.04_260)]" />
      </div>

      {/* Mobile frame — overlapping bottom-right */}
      <div className="absolute -bottom-4 -right-2 sm:right-0 w-20 sm:w-24">
        <div className="rounded-2xl bg-[oklch(0.20_0.04_260)] p-1 shadow-xl ring-1 ring-black/20">
          <div className="overflow-hidden rounded-xl bg-[oklch(0.18_0.06_255)] aspect-[9/19]">
            {/* Mobile status bar */}
            <div className="flex justify-between bg-[oklch(0.22_0.04_260)] px-2 py-1">
              <span className="text-[6px] text-white/60">9:41</span>
              <div className="flex gap-0.5 items-center">
                <div className="h-1 w-1 rounded-full bg-white/50" />
                <div className="h-1.5 w-1 rounded-sm bg-white/50" />
              </div>
            </div>
            {/* Mobile content */}
            <div className="p-2 space-y-1.5 bg-gradient-to-b from-[oklch(0.25_0.06_255)] to-[oklch(0.20_0.04_240)] h-full">
              <div className="text-[7px] font-bold text-white">Dream Space</div>
              <div className="h-10 rounded-lg bg-[oklch(0.55_0.22_255/0.35)]" />
              <div className="h-1 w-2/3 rounded-full bg-white/30" />
              <div className="h-1 w-1/2 rounded-full bg-white/20" />
              <div className="mt-1 h-4 w-full rounded-full bg-[oklch(0.55_0.22_255)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
