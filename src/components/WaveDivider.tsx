interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ flip = false, className = "" }: WaveDividerProps) => {
  return (
    <div className={`wave-divider ${className}`} style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="currentColor"
          className="text-background"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
