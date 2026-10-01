export type MiniStatCardProps = {
  title: string;
  subtitle: string;
  amount: string;
  increase: string;
  progress?: number;
  className?: string;
};

export function MiniStatCard({
  title,
  subtitle,
  amount,
  increase,
  progress,
  className = "",
}: MiniStatCardProps) {
  return (
    <div
      className={`bg-brand-blue backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-lg flex flex-col gap-[8px] ${className}`}
    >
      <div className="flex flex-col text-brand-gray-50">
        <span className="font-body font-medium text-base leading-[1.2]">
          {title}
        </span>
        <span className="font-body font-normal text-[0.625rem] leading-[1.2]">
          {subtitle}
        </span>
      </div>

      {progress !== undefined ? (
        <div className="flex items-center justify-between gap-[16px]">
          <span className="font-heading font-semibold text-2xl text-brand-gray-50 leading-[2rem] tracking-[-0.015rem]">
            {amount}
          </span>
          <div className="bg-brand-lime-alt px-[8px] py-[2px] rounded-[24px]">
            <span className="font-body font-medium text-[0.625rem] text-brand-gray-950">
              {increase}
            </span>
          </div>
        </div>
      ) : (
        <>
          <span className="font-heading font-semibold text-base sm:text-2xl text-brand-gray-50 leading-[2rem] tracking-[-0.015rem]">
            {amount}
          </span>
          <div className="bg-brand-lime-alt px-[8px] py-[2px] rounded-[24px] w-fit">
            <span className="font-body font-medium text-[0.625rem] text-brand-gray-950">
              {increase}
            </span>
          </div>
        </>
      )}

      {progress !== undefined && (
        <div className="w-full md:w-[200px] h-[8px] bg-white rounded-[24px] overflow-hidden mt-2 relative">
          <div
            className="absolute left-0 top-0 h-full bg-brand-lime rounded-[24px]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
