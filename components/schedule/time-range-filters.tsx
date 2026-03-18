import { RangeOption, TimeRange } from "@/components/schedule/types"

type TimeRangeFiltersProps = {
  value: TimeRange
  options: RangeOption[]
  onChange: (range: TimeRange) => void
}

export function TimeRangeFilters({ value, options, onChange }: TimeRangeFiltersProps) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.key === value
        return (
          <button
            key={option.key}
            type="button"
            onClick={() => onChange(option.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active
                ? "bg-plp-primary text-white border-plp-primary"
                : "bg-white text-plp-gray-700 border-plp-gray-300 hover:border-plp-secondary hover:text-plp-primary"
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
