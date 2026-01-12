import { Heart, Sparkles, Star } from 'lucide-react';

export function Overlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent h-32" />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 mb-2 tracking-wider">
          PORSCHE RENDERING
        </h1>
        <p className="text-pink-200 text-lg font-light tracking-[0.3em] flex items-center justify-center gap-2">
          <Star className="w-4 h-4" />
          LANA DEL REY EDITION
          <Star className="w-4 h-4" />
        </p>
      </div>

      <div className="absolute bottom-8 left-8 text-pink-100">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
          <span className="text-sm font-light tracking-wide">INTERACTIVE 3D EXPERIENCE</span>
        </div>
        <p className="text-xs text-pink-300/70 max-w-xs font-light">
          Drag to rotate • Scroll to zoom • Click the car to interact
        </p>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-pink-200">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-light">Born to Die</span>
        </div>
        <div className="flex items-center gap-2 text-pink-200">
          <Heart className="w-4 h-4" fill="currentColor" />
          <span className="text-sm font-light">Vintage Glamour</span>
        </div>
        <div className="flex items-center gap-2 text-pink-200">
          <Star className="w-4 h-4" />
          <span className="text-sm font-light">Pink Paradise</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse">
          <Heart className="w-6 h-6 text-pink-400/30" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-100">
          <Sparkles className="w-5 h-5 text-pink-300/40" />
        </div>
        <div className="absolute bottom-40 left-32 animate-pulse delay-200">
          <Star className="w-4 h-4 text-rose-400/30" />
        </div>
        <div className="absolute bottom-32 right-40 animate-pulse delay-300">
          <Heart className="w-5 h-5 text-pink-500/30" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
