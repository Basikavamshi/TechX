import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen w-full bg-linear-to-b from-blue-50 to-gray-100 px-4 py-10">
      <section className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
          <p className="text-sm text-gray-600">Join TechX and get personalized updates.</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="h-11 rounded-lg border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-lg border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="h-11 rounded-lg border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-11 rounded-lg bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-700">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
