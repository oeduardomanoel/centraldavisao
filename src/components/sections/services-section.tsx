import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Glasses, Eye, View, Microscope, Gauge, BrainCircuit, Scan, Palette } from "lucide-react";
import MotionContainer from "@/components/ui/motion-container";

const services = [
  {
    icon: <Glasses className="h-8 w-8 text-primary" />,
    title: "Refração Completa",
    description: "Para miopia, hipermetropia, astigmatismo e presbiopia."
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Acuidade Visual",
    description: "Mede a nitidez e clareza da sua visão."
  },
  {
    icon: <View className="h-8 w-8 text-primary" />,
    title: "Fundoscopia",
    description: "Avaliação detalhada da retina e do nervo óptico."
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Tonometria",
    description: "Mede a pressão intraocular para detectar glaucoma."
  },
  {
    icon: <Microscope className="h-8 w-8 text-primary" />,
    title: "Biomicroscopia",
    description: "Avaliação da córnea, cristalino e outras estruturas."
  },
  {
    icon: <Scan className="h-8 w-8 text-primary" />,
    title: "Mapeamento de Retina",
    description: "Exame detalhado de todo o fundo do olho."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Teste de Motilidade Ocular",
    description: "Avalia os movimentos dos olhos e alinhamento."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Teste de Visão de Cores",
    description: "Diagnóstico preciso de daltonismo e outras anomalias."
  }
];
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-card overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://i.imgur.com/Ws7KISz.jpeg"
          alt="Textura de fundo serviços"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <MotionContainer className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Nossos Serviços
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Exames e Procedimentos
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos uma gama completa de exames para um diagnóstico preciso e um cuidado completo com a sua visão.
          </p>
        </MotionContainer>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <MotionContainer key={service.title} delay={index * 0.1} className="h-full">
              <Card className="group flex flex-col p-6 bg-white/70 backdrop-blur-lg shadow-sm hover:shadow-2xl transition-all duration-500 items-start text-left h-full hover:-translate-y-2 border border-white/50 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="p-0 flex flex-col items-start text-left w-full relative z-10">
                  <div className="bg-white shadow-sm border border-primary/10 p-3 rounded-2xl mb-5 flex justify-center items-center group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-3 relative z-10">
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </MotionContainer>
          ))}
        </div>
        <MotionContainer delay={0.6} className="flex justify-center">
          <Button asChild size="xl" className="shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 active:scale-95">
            <a href="#contact">Agendar um Exame</a>
          </Button>
        </MotionContainer>
      </div>
    </section>
  );
}
