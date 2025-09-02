"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  CheckCircle,
  Navigation
} from "lucide-react"

// Tipos de consulta
const tiposConsulta = [
  { value: "general", label: "Consulta General" },
  { value: "comercial", label: "Consulta Comercial" },
  { value: "operaciones", label: "Operaciones Portuarias" },
  { value: "tarifas", label: "Consulta de Tarifas" },
  { value: "visitas", label: "Solicitud de Visita" },
  { value: "eventos", label: "Eventos y Actividades" },
  { value: "prensa", label: "Prensa y Comunicación" },
  { value: "otro", label: "Otro" }
]

// Departamentos
const departamentos = [
  { value: "comercial", label: "Comercial" },
  { value: "mesa-entradas", label: "Mesa de Entradas" },
  { value: "obras-ingenieria", label: "Obras e Ingeniería" },
  { value: "administracion", label: "Administración" },
  { value: "relaciones-institucionales", label: "Relaciones Institucionales" },
  { value: "legales", label: "Legales" }
]

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoConsulta: "",
    departamento: "",
    asunto: "",
    mensaje: "",
    newsletter: false,
    terminos: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        empresa: "",
        tipoConsulta: "",
        departamento: "",
        asunto: "",
        mensaje: "",
        newsletter: false,
        terminos: false
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Contacto</h1>
            <p className="text-xl text-white/90 mb-6">
              Estamos aquí para ayudarte. Contacta con nosotros a través del formulario 
              o utiliza cualquiera de nuestros canales de comunicación disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <MessageSquare className="mr-2 h-5 w-5" />
                Enviar mensaje
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Información de contacto */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Phone className="h-8 w-8 text-plp-primary" />
              </div>
              <h3 className="text-lg font-semibold text-plp-primary mb-2">Teléfono</h3>
              <p className="text-plp-gray-700 mb-2">+54 221 123-4567</p>
              <p className="text-sm text-plp-gray-600">Lun - Vie: 8:00 - 18:00</p>
            </Card>

            <Card className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Mail className="h-8 w-8 text-plp-primary" />
              </div>
              <h3 className="text-lg font-semibold text-plp-primary mb-2">Email</h3>
              <p className="text-plp-gray-700 mb-2">comercial@puertolaplata.com</p>
              <p className="text-sm text-plp-gray-600">Respuesta en 24h</p>
            </Card>

            <Card className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-plp-primary" />
              </div>
              <h3 className="text-lg font-semibold text-plp-primary mb-2">Ubicación</h3>
              <p className="text-plp-gray-700 mb-2">Puerto La Plata</p>
              <p className="text-sm text-plp-gray-600">Buenos Aires, Argentina</p>
            </Card>

            <Card className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Clock className="h-8 w-8 text-plp-primary" />
              </div>
              <h3 className="text-lg font-semibold text-plp-primary mb-2">Horarios</h3>
              <p className="text-plp-gray-700 mb-2">Lunes a Viernes</p>
              <p className="text-sm text-plp-gray-600">8:00 - 18:00 hs</p>
            </Card>
          </div>
        </section>

        {/* Formulario y información adicional */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-plp-primary mb-4">Formulario de Contacto</h2>
                <p className="text-plp-gray-700">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-plp-gray-700">
                    Gracias por contactarnos. Te responderemos en las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información personal */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-sm font-medium text-plp-gray-700">
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        placeholder="Tu nombre"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="apellido" className="text-sm font-medium text-plp-gray-700">
                        Apellido *
                      </Label>
                      <Input
                        id="apellido"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange("apellido", e.target.value)}
                        placeholder="Tu apellido"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-plp-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-sm font-medium text-plp-gray-700">
                        Teléfono
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                        placeholder="+54 221 123-4567"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="empresa" className="text-sm font-medium text-plp-gray-700">
                      Empresa / Organización
                    </Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange("empresa", e.target.value)}
                      placeholder="Nombre de tu empresa"
                      className="mt-1"
                    />
                  </div>

                  {/* Tipo de consulta y departamento */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tipoConsulta" className="text-sm font-medium text-plp-gray-700">
                        Tipo de Consulta *
                      </Label>
                      <Select value={formData.tipoConsulta} onValueChange={(value) => handleInputChange("tipoConsulta", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          {tiposConsulta.map((tipo) => (
                            <SelectItem key={tipo.value} value={tipo.value}>
                              {tipo.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="departamento" className="text-sm font-medium text-plp-gray-700">
                        Departamento
                      </Label>
                      <Select value={formData.departamento} onValueChange={(value) => handleInputChange("departamento", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecciona el departamento" />
                        </SelectTrigger>
                        <SelectContent>
                          {departamentos.map((depto) => (
                            <SelectItem key={depto.value} value={depto.value}>
                              {depto.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="asunto" className="text-sm font-medium text-plp-gray-700">
                      Asunto *
                    </Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleInputChange("asunto", e.target.value)}
                      placeholder="Título de tu consulta"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-sm font-medium text-plp-gray-700">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange("mensaje", e.target.value)}
                      placeholder="Describe tu consulta en detalle..."
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-plp-gray-700">
                        Suscribirme al newsletter para recibir noticias y actualizaciones
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terminos"
                        checked={formData.terminos}
                        onCheckedChange={(checked) => handleInputChange("terminos", checked as boolean)}
                        required
                      />
                      <Label htmlFor="terminos" className="text-sm text-plp-gray-700">
                        Acepto los términos y condiciones y la política de privacidad *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Información adicional */}
          <div className="space-y-6">
            {/* Información de contacto detallada */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-plp-primary mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-plp-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-plp-gray-900">Consorcio de Gestión del Puerto La Plata</p>
                    <p className="text-sm text-plp-gray-600">Oficinas Centrales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-plp-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-plp-gray-900">Dirección</p>
                    <p className="text-sm text-plp-gray-600">Puerto La Plata, Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-plp-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-plp-gray-900">Teléfono</p>
                    <p className="text-sm text-plp-gray-600">+54 221 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-plp-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-plp-gray-900">Email</p>
                    <p className="text-sm text-plp-gray-600">comercial@puertolaplata.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-plp-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                    <p className="text-sm text-plp-gray-600">Lunes a Viernes: 8:00 - 18:00 hs</p>
                    <p className="text-sm text-plp-gray-600">Sábados: 8:00 - 12:00 hs</p>
                  </div>
                </div>
              </div>
            </Card>

                         {/* Departamentos y contactos específicos */}
             <Card className="p-6">
               <h3 className="text-xl font-semibold text-plp-primary mb-4">Departamentos</h3>
               <div className="space-y-3">
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Comercial</h4>
                   <p className="text-sm text-plp-gray-600">comercial@puertolaplata.com</p>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Mesa de Entradas</h4>
                   <p className="text-sm text-plp-gray-600">mesaentradas@puertolaplata.com</p>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Obras e Ingeniería</h4>
                   <p className="text-sm text-plp-gray-600">obras@puertolaplata.com</p>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Administración</h4>
                   <p className="text-sm text-plp-gray-600">admin@puertolaplata.com</p>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Relaciones Institucionales</h4>
                   <p className="text-sm text-plp-gray-600">relaciones@puertolaplata.com</p>
                 </div>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   <h4 className="font-medium text-plp-gray-900">Legales</h4>
                   <p className="text-sm text-plp-gray-600">legales@puertolaplata.com</p>
                 </div>
               </div>
                          </Card>
           </div>
         </div>

        {/* CTA final */}
        <section className="mt-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
            <p className="text-lg mb-6 opacity-90">
              Para consultas urgentes, puedes contactarnos directamente por teléfono 
              o visitar nuestras oficinas durante el horario de atención.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Llamar ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Navigation className="mr-2 h-4 w-4" />
                Cómo llegar
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
