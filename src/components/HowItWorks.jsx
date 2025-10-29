import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Look & Listen',
    desc: 'Your camera and mic observe gesture and voice streams locally—no cloud required.',
  },
  {
    step: '02',
    title: 'Understand',
    desc: 'On‑device AI interprets intent using computer vision and NLU models.',
  },
  {
    step: '03',
    title: 'Act',
    desc: 'Mapped actions trigger controls across your apps and connected devices.',
  },
  {
    step: '04',
    title: 'Adapt',
    desc: 'GestureAI learns preferences over time and recommends shortcuts.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            How it works
          </h2>
          <p className="mt-3 text-gray-600">
            A streamlined loop that feels magical the first time—and every time after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="text-sm font-semibold text-cyan-600">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
