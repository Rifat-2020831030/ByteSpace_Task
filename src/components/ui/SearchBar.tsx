export function SearchBar() {
  return (
    <div className="flex gap-[16px] items-start shrink-0">
      <div className="bg-white flex gap-[8px] h-[52px] items-center px-[24px] py-[12px] rounded-[24px] shrink-0 w-[461px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#82868E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="flex-1 bg-transparent border-none outline-none text-[#82868E] text-[18px] leading-[1.6] placeholder:text-[#82868E]"
        />
      </div>
      <button className="bg-[#D4FB20] flex items-center justify-center px-[24px] py-[12px] rounded-[24px] shrink-0 hover:bg-[#D4FB20]/90 transition-colors">
        <span className="text-[#242528] text-[18px] font-medium leading-[1.2]">
          Search
        </span>
      </button>
    </div>
  );
}
