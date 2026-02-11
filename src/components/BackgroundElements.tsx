export const GradientBlob = ({
  className = "",
  color = "bg-blue-500",
  position = "top-0 left-0",
}: {
  className?: string;
  color?: string;
  position?: string;
}) => {
  return (
    <div
      className={`absolute ${position} -z-10 pointer-events-none overflow-hidden`}
    >
      <div
        className={`w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow ${color} ${className}`}
      ></div>
    </div>
  );
};

export const GridPattern = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-[0.03] dark:opacity-[0.05] ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    ></div>
  );
};
