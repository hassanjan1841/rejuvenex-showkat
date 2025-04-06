export default function BackgroundEffects() {
  return (
    <>
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#00a8ff] blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-[#d000ff] blur-[100px] opacity-10"></div>
        <div className="absolute top-[60%] right-[10%] w-[200px] h-[200px] rounded-full bg-[#00ffff] blur-[50px] opacity-30"></div>
      </div>

      {/* Curved light effect */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M10,100 Q90,180 190,10" stroke="#00ffff" strokeWidth="4" fill="none" className="opacity-70" />
          <circle cx="190" cy="10" r="6" fill="#00ffff" className="animate-pulse" />
        </svg>
      </div>
    </>
  )
}

