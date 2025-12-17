import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import PageTransition from "../components/PageTransition.jsx";
import { doc, setDoc } from "firebase/firestore";

function Access() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      

  await setDoc(doc(db, "subscribers", email.toLowerCase()), {
    email,
    phone,
    createdAt: serverTimestamp(),
  });

    } catch (error) {
      console.error("Error saving subscriber:", error);
    }

    navigate("/lookbook");
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-neutral-100">
        <section className="glass-panel mx-auto flex w-full max-w-xl flex-col gap-8 rounded-3xl px-8 py-10 shadow-[0_0_60px_rgba(0,0,0,0.85)]">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Access
            </p>
            <h2 className="text-xl font-medium text-neutral-50">
              Not everyone enters 23.
            </h2>
            <p className="text-xs text-neutral-400">
              Leave a trace. We&apos;ll remember you next time the doors open.
              No spam, no noise — just the occasional late-night signal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.25em] text-neutral-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-neutral-700 bg-transparent pb-2 text-sm outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-300"
                placeholder="you@fragment23.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-xs uppercase tracking-[0.25em] text-neutral-400"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-neutral-700 bg-transparent pb-2 text-sm outline-none transition-colors placeholder:text-neutral-600 focus:border-neutral-300"
                placeholder="+1 323 000 0023"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 px-6 py-3 text-xs uppercase tracking-[0.35em] text-neutral-200 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-800"
            >
              Unlock Lookbook
            </button>
          </form>
        </section>
      </div>
    </PageTransition>
  );
}

export default Access;
