"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar, Phone, MapPin, CheckCircle,Linkedin, Instagram } from "lucide-react"
import { useState, useRef } from "react"
import Footer from "@/components/footer"
import Script from "next/script"
import Depoimentos from "@/components/Depoimentos"
import FotoConsultorio from "@/components/FotoConsultorio"


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  })

  const contactRef = useRef<HTMLElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Formatar a mensagem para o WhatsApp
    const message = `
*Nova Solicitação de Agendamento - White Shining*
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Data:* ${formData.date}
*Horário:* ${formData.time}
*Mensagem:* ${formData.message}
  `.trim()

    // Número de WhatsApp da empresa (usando o número comercial)
    const whatsappNumber = "931977842"

    // Criar URL do WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Abrir WhatsApp em nova janela
    window.open(whatsappUrl, "_blank")
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-sky-500">White Shining</span>
            <Image
              src="/images/logoboca.png"
              alt="White Shining - Clareamento Dentário Cosmético"
              width={44}
              height={44}
              className="hidden md:block"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Início
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Galeria
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-sky-500 transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="bg-sky-500 hover:bg-sky-600" onClick={scrollToContact}>
            Agendar Consulta
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforme seu Sorriso com Clareamento Dental Profissional
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Recupere a confiança com um sorriso mais branco e radiante. Nossos tratamentos são rápidos, seguros e
                  com resultados duradouros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-sky-500 hover:bg-sky-600" onClick={scrollToContact}>
                    Agendar Consulta
                  </Button>
                  <Button variant="outline">Saiba Mais</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/logo1.png"
                  alt="White Shining - Clareamento Dentário Cosmético"
                  width={800}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <FotoConsultorio/>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Oferecemos diferentes opções de clareamento dental para atender às suas necessidades.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="rounded-full bg-sky-100 p-4">
                    <CheckCircle className="h-10 w-10 text-sky-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Clareamento Dental Profissional</h3>
                  
                  <div className="bg-sky-100 text-sky-800 px-6 py-4 rounded-md font-bold text-xl my-2 w-full max-w-md">
                    🔥 OFERTA ESPECIAL: 4 sessões por apenas 99€! 🔥
                  </div>
                  
                  <p className="text-muted-foreground text-lg max-w-3xl">
                    Nosso tratamento de clareamento dental profissional oferece resultados imediatos e duradouros. 
                    Ideal para quem busca um sorriso mais branco e radiante em poucas sessões.
                  </p>
                  
                  
                  
                  <Button className="bg-sky-500 hover:bg-sky-600 mt-4" size="lg" onClick={scrollToContact}>
                    Aproveitar Oferta Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Benefícios do Clareamento Dentário
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Seguro quando feito com acompanhamento profissional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Star className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Resultados imediatos</h3>
                <p className="text-sm text-muted-foreground">
                  Resultados visíveis logo após a primeira sessão.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Procedimento Não Invasivo</h3>
                <p className="text-sm text-muted-foreground">Tratamento seguro que preserva a estrutura dos dentes.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Star className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Aumento da Autoestima</h3>
                <p className="text-sm text-muted-foreground">
                  Mais confiança para sorrir em todas as situações.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Calendar className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Atendimento Flexível</h3>
                <p className="text-sm text-muted-foreground">Horários que se adaptam à sua rotina.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Por que escolher a White Shining?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Somos especialistas em transformar sorrisos com segurança e qualidade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Star className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Profissionais Qualificados</h3>
                <p className="text-sm text-muted-foreground">
                  Equipe com anos de experiência e formação especializada.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Tecnologia Avançada</h3>
                <p className="text-sm text-muted-foreground">Equipamentos modernos para resultados superiores.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Star className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Resultados Garantidos</h3>
                <p className="text-sm text-muted-foreground">
                  Satisfação dos clientes comprovada por depoimentos reais.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <Calendar className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold">Atendimento Flexível</h3>
                <p className="text-sm text-muted-foreground">Horários que se adaptam à sua rotina.</p>
              </div>
            </div>
          </div>
        </section>

        <Depoimentos/>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32" ref={contactRef}>
          <div className="container px-4 md:px-6">
            <div className="mb-12 w-full">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Exy-xZtg26q9riJM0BMVEVdqnsugiqsCkNiNSSsXm7Of8noCbqtkZiyNa0ZBcdU6Rh1Vg8kGx?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="800" 
                frameBorder="0">
              </iframe>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Agende sua consulta</h2>
                <p className="text-muted-foreground md:text-xl">
                  Entre em contato conosco para agendar uma avaliação gratuita e descobrir o melhor tratamento para o
                  seu sorriso.
                </p>
                <div className="bg-sky-100 text-sky-800 px-4 py-3 rounded-md font-medium my-2">
                  Oferta por tempo limitado: 4 sessões de clareamento por apenas 99€!
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sky-500" />
                    <span>Comercial: 931 977 842</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sky-500" />
                    <span>Marcação: 937 084 286</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <span>Rua Delfim Lima 3598 e 3615 Rechousa</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-sky-500 hover:bg-sky-600">
                    <a href="https://wa.me/931977842" target="_blank" rel="noopener noreferrer">
                      Agendar por WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a href="tel:937084286">Ligar Agora</a>
                  </Button>
                </div>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">Agendamento de Consulta</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="date" className="text-sm font-medium">
                        Data Preferida
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="time" className="text-sm font-medium">
                        Horário Preferido
                      </label>
                      <input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Informações adicionais sobre seu agendamento"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                    Agendar Consulta
                  </Button>
                </form>
              </div>
            </div>
            
          </div>
        </section>
      </main>
<Footer/>
    </div>
  )
}
