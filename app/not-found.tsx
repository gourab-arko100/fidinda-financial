import Link from "next/link";
import Mark from "@/components/Mark";
import { ArrowRight } from "@/components/Icons";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container grid min-h-[64vh] items-center gap-12 py-20 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-[15px] font-medium text-brand-200">Error 404</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">We couldn&apos;t find that page</h1>
          <p className="mt-5 max-w-md text-lg text-brand-100">It may have moved during our website update. Try the home page or one of our services.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn-red">Go to home page <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services" className="btn-line-light">View services</Link>
          </div>
        </div>
        <Mark className="mx-auto hidden w-full max-w-[320px] md:block" />
      </div>
    </section>
  );
}
