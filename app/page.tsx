import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20 h-[850px]">
        <Hero />
      </div>
    </div>
  );
}
