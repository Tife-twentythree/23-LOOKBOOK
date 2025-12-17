import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


// Landing page with fullscreen intro and subtle fade
function Landing() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleEnter = () => {
    navigate('/access')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-neutral-100">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 text-center"
      >
        <div className="space-y-4">
          <h1 className="text-[6rem] font-semibold leading-none tracking-[0.6em] text-neutral-50 sm:text-[8rem]">
            23
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            In every city there&apos;s a number locals whisper when the night
            gets interesting. For us, it&apos;s 23 — the hour when emails stop,
            ambition starts dressing up, and creativity borrows your favorite
            jacket without asking. 23 is not an age, a size, or a lucky charm.
            It&apos;s the quiet agreement between you and your wardrobe that
            today will not be average.
          </p>
        </div>

        <button
          type="button"
          onClick={handleEnter}
          className="mt-4 rounded-full border border-neutral-700 bg-neutral-900/40 px-10 py-3 text-xs uppercase tracking-[0.35em] text-neutral-200 transition-colors duration-300 hover:border-neutral-300 hover:bg-neutral-800"
        >
          Enter 23
        </button>

        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500">
          A lookbook for people who dress like the future is already here.
        </p>
      </motion.section>
    </div>
  )
}

export default Landing


