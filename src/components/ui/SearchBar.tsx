import { Input } from "./Input";

export function SearchBar() {
  return (
    <div className="flex gap-[16px] items-start shrink-0 w-full max-w-[600px]">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Course, topic, creator"
          leftIcon={
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
          }
        />
      </div>
      <button className="bg-[#D4FB20] flex items-center justify-center px-[24px] py-[12px] rounded-[24px] shrink-0 hover:bg-[#D4FB20]/90 transition-colors">
        <span className="text-brand-gray-950 text-[18px] font-medium leading-[1.2]">
          Search
        </span>
      </button>
    </div>
  );
}
