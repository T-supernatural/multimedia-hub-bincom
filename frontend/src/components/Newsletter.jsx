import React from "react";

function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch("http://localhost:1000/api/verify-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok && data.exists) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else if (response.ok && !data.exists) {
        setError("This email address does not exist or cannot receive mail.");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white/80 to-rose-50 backdrop-blur-sm bg-opacity-70  py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-6xl font-light tracking-tight text-black logo">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get fresh updates, curated media drops, and exclusive features
              delivered weekly. No fluff, just the good stuff.
            </p>
            <form
              className="mt-6 flex max-w-md gap-x-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-black/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-red-200 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#BF0603] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BF0603]"
              >
                Subscribe
              </button>
            </form>
            {error && (
              <p className="mt-3 text-red-500 text-sm font-medium">{error}</p>
            )}
            {status && (
              <p className="mt-3 text-green-600 text-sm font-medium">
                {status}
              </p>
            )}
          </div>

          {/* RIGHT SIDE */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                <i className="fas fa-calendar-alt text-black text-xl"></i>
              </div>
              <dt className="mt-4 text-base font-semibold text-black">
                Weekly Drops
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                Expect one email a week packed with our best content, handpicked
                just for you.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                <i className="fas fa-shield-alt text-black text-xl"></i>
              </div>
              <dt className="mt-4 text-base font-semibold text-black">
                Spam-Free Zone
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                No shady ads, no junk — just clean, curated content that
                respects your inbox.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
