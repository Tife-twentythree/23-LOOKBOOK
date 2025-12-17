// Minimal footer with brand + social placeholders
function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="tracking-[0.25em] uppercase">
          23 — Night Shift Atelier
        </span>
        <div className="flex gap-6">
          <span>@23studio</span>
          <span>IG / TT / PIN</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


