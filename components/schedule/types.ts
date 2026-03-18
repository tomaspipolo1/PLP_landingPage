export type TimeRange = "hoy" | "manana" | "semana"

export type ScheduleRow = {
  buque: string
  naviera: string
  hora: string
  estadia: string
  sitio: string
  origen: string
  carga: string
  destino: string
  estado: string
}

export type ScheduleData = {
  arribos: ScheduleRow[]
  salidas: ScheduleRow[]
}

export type RangeOption = {
  key: TimeRange
  label: string
}
