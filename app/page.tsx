import Encryption from './components/Encryption';
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </div>
  );
}
