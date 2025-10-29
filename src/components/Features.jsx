import React from 'react';
import { Hand, Mic, Lock, Sparkles, Laptop, Tv } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Natural Gestures',
    desc: 'Swipe, pinch, flick, and wave. Your hands become the controller.',
  },
  {
    icon: Mic,
    title: 'Voice Intelligence',
    desc: 'Speak naturally; GestureAI understands context and intent.',
  },
  {
    icon: Lock,
    title: 'Privacy‑First',
    desc: 'On‑device AI keeps your data secure and personal.',
  },
  {
    icon: Sparkles,
    title: 'Adaptive Learning',
    desc: 'Learns your habits and suggests shortcuts that save time.',
  },
  {
    icon: Laptop,
    title: 'Cross‑Device',
    desc: 'Control laptops, phones, and workstations seamlessly.',
  },
  {
    icon: Tv,
    title: 'Smart Displays',
    desc: 'Switch slides, manage media, and present hands‑free.',
  },
];

export default function Features() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Designed for the way you move and speak
          </h2>
          <p className="mt-3 text-gray-600">
            Powerful, flexible, and delightfully intuitive—built to adapt to your workflows.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
