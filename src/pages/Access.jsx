import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import PageTransition from "../components/PageTransition.jsx";

function Access() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);

    if (value.length !== 11) {
      setPhoneError("Phone number must be exactly 11 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (phone.length !== 11) {
      setPhoneError("Phone number must be exactly 11 digits");
      return;
    }

    try {
      await setDoc(doc(db, "subscribers", email.toLowerCase()), {
        email,
        phone,
        createdAt: serverTimestamp(),
      });

      navigate("/lookbook");
    } catch (error) {
      console.error("Error saving subscriber:", error);
    }
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <section className="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-3xl border border-neutral-800 bg-neutral-950 px-8 py-10 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Access
            </p>
            <h2 className="text-xl font-medium text-white">
              Not everyone enters 23.
            </h2>
            <p className="text-xs leading-relaxed text-neutral-400">
              Leave a trace. Each entry is remembered. No spam, no noise — just a
              quiet signal when the next chapter opens.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-neutral-700 bg-transparent pb-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white"
                placeholder="you@23studio.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={11}
                className="w-full border-b border-neutral-700 bg-transparent pb-2 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-white"
                placeholder="08012345678"
              />
              {phoneError && (
                <p className="text-xs text-red-500">{phoneError}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-neutral-800"
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
