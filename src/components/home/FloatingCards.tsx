export function LearningProgressCard() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white flex flex-col gap-[8px] items-start p-[16px] rounded-[16px]">
      <p className="font-medium text-[#242528] text-[14px] leading-[1.2]">
        Learning Progress
      </p>
      <div className="flex flex-col items-start w-[200px]">
        <p className="font-semibold text-[#242528] text-[48px] tracking-[-0.48px] leading-[1.2]">
          55%
        </p>
      </div>
      <div className="relative h-[8px] w-[200px]">
        <div className="absolute inset-0 bg-[#f6f6f6] rounded-[24px]" />
        <div className="absolute inset-y-0 left-0 bg-[#d4fb20] rounded-[24px] w-[112px]" />
      </div>
    </div>
  );
}

export function HappyStudentsCard() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white flex flex-col gap-[8px] items-start justify-center p-[16px] rounded-[16px] w-[258px]">
      <div className="flex flex-col items-start">
        <p className="font-medium text-[#242528] text-[16px] leading-[1.2]">
          Happy Students
        </p>
        <div className="flex items-center gap-1">
          <p className="text-[12px] leading-[1.6]">
            <span className="text-[#242528]">4.5 </span>
            <span className="text-[#82868e]">(240)</span>
          </p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="text-[#FFC107]"
          >
            <path d="M8 2l2.05 4.18L14.67 6.8l-3.34 3.25L12.11 14 8 11.84 3.89 14l.78-3.95L1.33 6.8l4.62-.62L8 2z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center mt-2">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            className="w-[43px] h-[43px] -mr-[16px] rounded-full border-2 border-white bg-[#f6f6f6]"
          />
        ))}
        <div className="w-[43px] h-[43px] rounded-full bg-[#f6f6f6] border-2 border-white flex items-center justify-center ml-[16px] z-10">
          <p className="font-bold text-[#242528] text-[12px] leading-[1.5]">
            2K+
          </p>
        </div>
      </div>
    </div>
  );
}

export function UiUxDesignCard() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white flex flex-col items-start justify-center p-[16px] rounded-[16px]">
      <p className="font-medium text-[#242528] text-[16px] leading-[1.2]">
        UI/UX Design
      </p>
      <div className="flex items-center gap-[8px] text-[#82868e] mt-1">
        <p className="text-[12px] leading-[1.6]">200 Courses</p>
        <p className="text-[10px] leading-[1.5]">•</p>
        <p className="text-[12px] leading-[1.6]">1000+ Students</p>
      </div>
    </div>
  );
}
