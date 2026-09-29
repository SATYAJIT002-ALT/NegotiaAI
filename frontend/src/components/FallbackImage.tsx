import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function FallbackImage({ src, alt, className = "", containerClassName = "" }: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#131d17] to-[#0a0f0d] rounded-xl border border-[#1a271f] ${containerClassName}`}>
        <ImageIcon className="w-10 h-10 text-emerald-500/20 mb-2" strokeWidth={1} />
        <span className="text-[10px] font-bold text-emerald-500/40 uppercase tracking-widest text-center px-2">Unavailable</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
      className={className} 
    />
  );
}
