import React from "react";
import Image from "next/image";

const FotoConsultorio: React.FC = () => {
  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nosso Consultório</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conheça o ambiente onde realizamos nossos tratamentos com conforto e tecnologia.
            </p>
          </div>
        </div>
        
        {/* Layout dinâmico de galeria */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Primeira linha */}
          <div className="md:col-span-4 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/consultorio/foto1.jpeg"
              alt="Consultório White Shining - Cadeira odontológica"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="md:col-span-4 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/consultorio/foto2.jpeg"
              alt="Consultório White Shining - Mesa de instrumentos"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="md:col-span-4 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/consultorio/foto3.jpeg"
              alt="Consultório White Shining - Equipamento"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Segunda linha */}
          <div className="md:col-span-6 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/consultorio/foto4.jpeg"
              alt="Consultório White Shining - Visão geral"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="md:col-span-6 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/consultorio/foto5.jpeg"
              alt="Consultório White Shining - Recepção"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FotoConsultorio;