"use client"
const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Grid Animation */}
      <div className="grid grid-cols-3 gap-1.5">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-sm bg-primary"
            style={{
              animation: "pulse 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;