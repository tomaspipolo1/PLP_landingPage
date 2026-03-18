function getStatusClassName(status: string) {
  const normalized = status.toLowerCase()

  if (normalized.includes("demorado")) {
    return "bg-amber-100 text-amber-700 border-amber-200"
  }
  if (normalized.includes("pendiente")) {
    return "bg-plp-gray-100 text-plp-gray-700 border-plp-gray-300"
  }
  if (normalized.includes("en tiempo") || normalized.includes("confirmado")) {
    return "bg-emerald-100 text-emerald-700 border-emerald-200"
  }

  return "bg-sky-100 text-sky-700 border-sky-200"
}

export function ScheduleStatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${getStatusClassName(status)}`}
    >
      {status}
    </span>
  )
}
