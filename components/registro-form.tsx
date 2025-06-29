"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "./auth-context"
import { Eye, EyeOff, User, Mail, Lock, Phone, CalendarIcon, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export function RegistroForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    usuario: "",
    password: "",
    confirmPassword: "",
    dni: "",
    telefono: "",
  })
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | undefined>(undefined)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [captchaVerificado, setCaptchaVerificado] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showCalendar, setShowCalendar] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<HTMLButtonElement>(null)

  const router = useRouter()
  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Validar campos obligatorios
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio"
    if (!formData.apellido) newErrors.apellido = "El apellido es obligatorio"
    if (!formData.correo) newErrors.correo = "El correo es obligatorio"
    else if (!/\S+@\S+\.\S+/.test(formData.correo)) newErrors.correo = "Correo electrónico inválido"
    if (!formData.usuario) newErrors.usuario = "El usuario es obligatorio"
    if (!formData.password) newErrors.password = "La contraseña es obligatoria"
    else if (formData.password.length < 8) newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    if (!formData.confirmPassword) newErrors.confirmPassword = "Debe confirmar la contraseña"
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden"
    if (!formData.dni) newErrors.dni = "El DNI es obligatorio"
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio"
    if (!fechaNacimiento) newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria"
    if (!aceptaTerminos) newErrors.aceptaTerminos = "Debe aceptar los términos y condiciones"
    if (!captchaVerificado) newErrors.captcha = "Debe verificar que no es un robot"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      setIsLoading(true)
      // Simulamos un delay para mostrar el estado de carga
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Llamamos a la función login del contexto de autenticación
      login()

      // Redirigimos al usuario a la página principal
      router.push("/")
    } catch (err) {
      setErrors({ general: "Error al registrar usuario. Por favor intente nuevamente." })
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCaptchaClick = () => {
    // Simulamos verificación de captcha
    setCaptchaVerificado(!captchaVerificado)
  }

  // Función para manejar la selección de fecha
  const handleDateSelect = (date: Date) => {
    setFechaNacimiento(date)
    setShowCalendar(false)
  }

  // Función para generar el calendario
  const renderCalendar = () => {
    if (!showCalendar) return null

    // Obtener la fecha actual o la fecha seleccionada
    const currentDate = fechaNacimiento || new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // Obtener el primer día del mes y el número de días
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    // Ajustar el primer día para que la semana comience en lunes (0 = lunes, 6 = domingo)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

    // Generar los días del mes
    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    // Nombres de los días de la semana
    const weekDays = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"]

    // Nombres de los meses
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ]

    // Generar años para el selector (desde 80 años atrás hasta 18 años atrás)
    const currentYear = new Date().getFullYear()
    const years = []
    for (let y = currentYear - 80; y <= currentYear - 18; y++) {
      years.push(y)
    }

    // Función para cambiar el mes
    const changeMonth = (increment: number) => {
      const newDate = new Date(currentDate)
      newDate.setMonth(newDate.getMonth() + increment)
      setFechaNacimiento(newDate)
    }

    // Función para cambiar el año
    const changeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newYear = Number.parseInt(e.target.value)
      const newDate = new Date(currentDate)
      newDate.setFullYear(newYear)
      setFechaNacimiento(newDate)
    }

    return (
      <div
        ref={calendarRef}
        className="absolute z-10 mt-1 bg-white border rounded-md shadow-lg p-3 w-64"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-2">
          <button type="button" className="text-gray-600 hover:text-gray-800" onClick={() => changeMonth(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center space-x-2">
            <span className="font-medium">{months[month]}</span>
            <select value={year} onChange={changeYear} className="border rounded px-1 py-0.5 text-sm">
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="text-gray-600 hover:text-gray-800" onClick={() => changeMonth(1)}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Días de la semana */}
          {weekDays.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}

          {/* Espacios vacíos antes del primer día */}
          {Array.from({ length: adjustedFirstDay }).map((_, index) => (
            <div key={`empty-${index}`} className="text-center py-1"></div>
          ))}

          {/* Días del mes */}
          {days.map((day) => {
            const date = new Date(year, month, day)
            const isSelected =
              fechaNacimiento &&
              fechaNacimiento.getDate() === day &&
              fechaNacimiento.getMonth() === month &&
              fechaNacimiento.getFullYear() === year

            return (
              <button
                key={`day-${day}`}
                type="button"
                className={`text-center py-1 rounded-full hover:bg-gray-100 text-sm
                  ${isSelected ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                `}
                onClick={() => handleDateSelect(date)}
              >
                {day}
              </button>
            )
          })}
        </div>

        <div className="flex justify-end mt-2 pt-2 border-t border-gray-200">
          <button
            type="button"
            className="text-sm px-2 py-1 text-gray-600 hover:text-gray-800 mr-2"
            onClick={() => setShowCalendar(false)}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="text-sm px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowCalendar(false)}
          >
            Aceptar
          </button>
        </div>
      </div>
    )
  }

  // Cerrar el calendario al hacer clic fuera
  const handleDocumentClick = (e: React.MouseEvent) => {
    if (
      showCalendar &&
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node) &&
      dateInputRef.current &&
      !dateInputRef.current.contains(e.target as Node)
    ) {
      setShowCalendar(false)
    }
  }

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden" onClick={handleDocumentClick}>
      <div className="bg-[#002A5B] p-6 text-white text-center">
        <img src="/logo-plp-white.png" alt="PLP Logo" className="h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Registro de Usuario</h1>
        <p className="text-blue-200 mt-2">Complete el formulario para crear su cuenta en Puerto La Plata</p>
      </div>

      <div className="p-6">
        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nombre */}
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                  className={`pl-10 ${errors.nombre ? "border-red-500" : ""}`}
                />
              </div>
              {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
            </div>

            {/* Apellido */}
            <div className="space-y-2">
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Ingrese su apellido"
                  className={`pl-10 ${errors.apellido ? "border-red-500" : ""}`}
                />
              </div>
              {errors.apellido && <p className="text-red-500 text-xs mt-1">{errors.apellido}</p>}
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className={`pl-10 ${errors.correo ? "border-red-500" : ""}`}
                />
              </div>
              {errors.correo && <p className="text-red-500 text-xs mt-1">{errors.correo}</p>}
            </div>

            {/* Usuario */}
            <div className="space-y-2">
              <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
                Nombre de usuario
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="usuario"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  placeholder="Elija un nombre de usuario"
                  className={`pl-10 ${errors.usuario ? "border-red-500" : ""}`}
                />
              </div>
              {errors.usuario && <p className="text-red-500 text-xs mt-1">{errors.usuario}</p>}
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`pl-10 ${errors.password ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirmar Contraseña */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`pl-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* DNI */}
            <div className="space-y-2">
              <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                DNI
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  placeholder="Ingrese su DNI"
                  className={`pl-10 ${errors.dni ? "border-red-500" : ""}`}
                />
              </div>
              {errors.dni && <p className="text-red-500 text-xs mt-1">{errors.dni}</p>}
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ingrese su teléfono"
                  className={`pl-10 ${errors.telefono ? "border-red-500" : ""}`}
                />
              </div>
              {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
            </div>

            {/* Fecha de Nacimiento - En la columna izquierda */}
            <div className="space-y-2">
              <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">
                Fecha de Nacimiento
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <button
                  ref={dateInputRef}
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className={`w-full h-10 pl-10 pr-3 py-2 flex items-center text-left border rounded-md ${
                    errors.fechaNacimiento ? "border-red-500" : "border-input"
                  } ${!fechaNacimiento ? "text-muted-foreground" : ""}`}
                >
                  {fechaNacimiento
                    ? format(fechaNacimiento, "d 'de' MMMM 'de' yyyy", { locale: es })
                    : "Seleccione su fecha de nacimiento"}
                </button>
                {showCalendar && renderCalendar()}
              </div>
              {errors.fechaNacimiento && <p className="text-red-500 text-xs mt-1">{errors.fechaNacimiento}</p>}
            </div>

            {/* Captcha - En la columna derecha con estilo similar a los otros campos */}
            <div className="space-y-2">
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                Verificación
              </label>
              <div className="relative">
                <div
                  className={`flex items-center h-10 border rounded-md px-3 ${
                    errors.captcha ? "border-red-500" : "border-input"
                  }`}
                >
                  <Checkbox
                    id="captcha"
                    checked={captchaVerificado}
                    onCheckedChange={handleCaptchaClick}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700">No soy un robot</span>
                </div>
              </div>
              {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
            </div>
          </div>

          {/* Términos y Condiciones - Fuera del grid, en una fila completa */}
          <div className="flex items-center">
            <Checkbox
              id="terminos"
              checked={aceptaTerminos}
              onCheckedChange={(checked) => setAceptaTerminos(checked as boolean)}
              className={`mr-3 ${errors.aceptaTerminos ? "border-red-500" : ""}`}
            />
            <label htmlFor="terminos" className="text-sm text-gray-700">
              Acepto los{" "}
              <Link href="/terminos" className="text-blue-600 hover:text-blue-800">
                términos y condiciones
              </Link>
            </label>
            {errors.aceptaTerminos && <p className="text-red-500 text-xs ml-2">{errors.aceptaTerminos}</p>}
          </div>

          <Button type="submit" className="w-full bg-[#0077B6] hover:bg-[#005A8D]" disabled={isLoading}>
            {isLoading ? "Procesando..." : "Crear Cuenta"}
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              ¿Ya tiene una cuenta?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Inicie sesión aquí
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
