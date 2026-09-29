export function LearningProgressCard() {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-xl border w-[232px] flex flex-col gap-4 absolute">
      <h3 className="text-sm font-medium text-muted-foreground">Learning Progress</h3>
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-bold">55%</span>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[55%] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function HappyStudentsCard() {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-xl border w-[258px] flex flex-col gap-4 absolute">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-muted-foreground">Happy Students</h3>
        <div className="flex items-center gap-1 text-sm font-semibold">
          <span>4.5 (240)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center -space-x-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted" />
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center">
          <span className="text-[10px] font-bold text-primary-foreground">2K+</span>
        </div>
      </div>
    </div>
  );
}

export function UiUxDesignCard() {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-xl border w-[208px] flex flex-col gap-1 absolute">
      <h3 className="text-sm font-bold">UI/UX Design</h3>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>200 Courses</span>
        <span>•</span>
        <span>1000+ Students</span>
      </div>
    </div>
  );
}
