export function SearchBar() {
  return (
    <div className="flex w-full max-w-[581px] items-center bg-background border rounded-full p-2 pl-6 shadow-sm">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground mr-3"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        placeholder="Course, topic, creator"
        className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-muted-foreground"
      />
      <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors ml-2">
        Search
      </button>
    </div>
  );
}
