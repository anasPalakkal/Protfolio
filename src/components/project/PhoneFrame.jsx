const SIZES = {
    sm: 'rounded-2xl border-[3px]',
    lg: 'rounded-[1.75rem] border-[6px]',
  };
  
  export function PhoneFrame({ src, alt, size = 'lg', className = '' }) {
    return (
      <div
        className={`relative mx-auto aspect-[9/19.5] w-full max-w-[240px] overflow-hidden border-text-primary bg-text-primary shadow-lg ${SIZES[size]} ${className}`}
      >
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }