"use client"

import { useState } from "react"
import { scheduleByRange, rangeOptions } from "@/components/schedule/data"
import { ScheduleTableCard } from "@/components/schedule/schedule-table-card"
import { TimeRangeFilters } from "@/components/schedule/time-range-filters"
import { TimeRange } from "@/components/schedule/types"

export function ScheduleSection() {
  const [range, setRange] = useState<TimeRange>("hoy")
  const data = scheduleByRange[range]

  return (
    <section className="py-14 md:py-16 bg-[#EAF3FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-plp-primary">Programación de buques</h2>
            <p className="text-plp-gray-600 mt-2 max-w-3xl mx-auto">
              Consultá arribos y salidas previstas en el Puerto La Plata por rango de tiempo.
            </p>
          </div>

          <TimeRangeFilters value={range} options={rangeOptions} onChange={setRange} />

          <div className="space-y-6">
            <ScheduleTableCard
              title="Arribos"
              subtitle="Próximos buques por arribar al puerto"
              timeLabel="ETA"
              rows={data.arribos}
            />
            <ScheduleTableCard
              title="Salidas"
              subtitle="Buques programados para zarpar"
              timeLabel="ETD"
              rows={data.salidas}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
