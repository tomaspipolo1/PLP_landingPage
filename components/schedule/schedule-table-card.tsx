import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScheduleRow } from "@/components/schedule/types"
import { ScheduleStatusBadge } from "@/components/schedule/status-badge"

type ScheduleTableCardProps = {
  title: string
  subtitle: string
  timeLabel: "ETA" | "ETD"
  rows: ScheduleRow[]
}

export function ScheduleTableCard({ title, subtitle, timeLabel, rows }: ScheduleTableCardProps) {
  return (
    <Card className="rounded-2xl border border-plp-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 md:px-6 py-4 border-b border-plp-gray-200 bg-white">
        <h3 className="text-xl md:text-2xl font-semibold text-plp-primary">{title}</h3>
        <p className="text-sm text-plp-gray-500 mt-1">{subtitle}</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-plp-gray-50 hover:bg-plp-gray-50">
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Buque</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">{timeLabel}</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Estadía</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Sitio</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Origen</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Carga</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Destino</TableHead>
            <TableHead className="text-xs uppercase tracking-wide text-plp-gray-600">Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={`${title}-${row.buque}-${row.hora}`} className="bg-white">
              <TableCell className="min-w-[180px]">
                <div className="font-semibold text-plp-primary">{row.buque}</div>
                <div className="text-xs text-plp-gray-500 mt-1">{row.naviera}</div>
              </TableCell>
              <TableCell className="font-medium text-plp-gray-700 whitespace-nowrap">{row.hora}</TableCell>
              <TableCell className="text-plp-gray-700 whitespace-nowrap">{row.estadia}</TableCell>
              <TableCell className="text-plp-gray-700 whitespace-nowrap">{row.sitio}</TableCell>
              <TableCell className="text-plp-gray-700 whitespace-nowrap">{row.origen}</TableCell>
              <TableCell className="text-plp-gray-700 whitespace-nowrap">{row.carga}</TableCell>
              <TableCell className="text-plp-gray-700 whitespace-nowrap">{row.destino}</TableCell>
              <TableCell>
                <ScheduleStatusBadge status={row.estado} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
