import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Interface para definir a estrutura de um depoimento
interface Depoimento {
  id: number;
  nome: string;
  texto: string;
  avaliacao: number;
  inicial?: string;
}

// Componente para exibir as estrelas de avaliação
const Estrelas = ({ quantidade }: { quantidade: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < quantidade ? "fill-current text-yellow-400" : "text-gray-300"}`} 
        />
      ))}
    </div>
  );
};

// Dados de exemplo para os depoimentos
const depoimentosData: Depoimento[] = [
  {
    id: 1,
    nome: "Maria Silva",
    texto: "Fiquei impressionada com os resultados do clareamento. Meu sorriso está muito mais bonito e natural. Recomendo a todos!",
    avaliacao: 5
  },
  {
    id: 2,
    nome: "João Santos",
    texto: "Excelente atendimento e resultados surpreendentes. Em apenas duas sessões já notei uma diferença significativa na cor dos meus dentes.",
    avaliacao: 5
  },
  {
    id: 3,
    nome: "Ana Oliveira",
    texto: "O clareamento foi perfeito para minha rotina. Consegui resultados incríveis e a equipe deu todo o suporte necessário!",
    avaliacao: 4
  },
  {
    id: 4,
    nome: "Carlos Mendes",
    texto: "Já fiz clareamento em outras clínicas, mas aqui o resultado foi muito superior. Profissionais atenciosos e preço justo. Valeu cada centimo!",
    avaliacao: 5
  }
];

interface DepoimentosProps {
  titulo?: string;
  subtitulo?: string;
  maxDepoimentos?: number;
}

const Depoimentos: React.FC<DepoimentosProps> = ({
  titulo = "O que nossos clientes dizem",
  subtitulo = "Veja os resultados reais e a satisfação de quem já transformou seu sorriso conosco.",
  maxDepoimentos = 4
}) => {
  // Limita o número de depoimentos exibidos
  const depoimentosExibidos = depoimentosData.slice(0, maxDepoimentos);

  return (
    <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {titulo}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {subtitulo}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          {depoimentosExibidos.map((depoimento) => (
            <Card key={depoimento.id} className="border-2 border-sky-100 hover:border-sky-200 transition-colors">
              <CardContent className="p-6 space-y-4">
                <Estrelas quantidade={depoimento.avaliacao} />
                <p className="text-muted-foreground">
                  "{depoimento.texto}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-sky-100 h-10 w-10 flex items-center justify-center">
                    <span className="font-medium text-sky-700">
                      {depoimento.inicial || depoimento.nome.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{depoimento.nome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
