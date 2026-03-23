import Image from "next/image";
import { Button } from "@/components/ui/button";
import MotionContainer from "@/components/ui/motion-container";

export default function AboutDoctorSection() {
  return (
    <section id="about" className="w-full py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <MotionContainer direction="right" className="relative flex justify-center lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 z-10">
              <Image
                src="/images/dra-jacqueline.jpeg"
                alt="Dra. Jacqueline Staniszewski Ladeia"
                width={600}
                height={800}
                className="object-cover w-full h-auto transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-primary/10 rounded-2xl blur-2xl" />
            <div className="absolute -top-6 -left-6 -z-10 w-full h-full bg-blue-400/10 rounded-2xl blur-2xl" />
          </MotionContainer>
          <MotionContainer direction="left" delay={0.2} className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Sobre a Especialista
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              Dra. Jacqueline Staniszewski Ladeia
            </h2>
            <div className="flex flex-col gap-1 text-foreground/80 font-medium">
              <span>CRM 26205</span>
              <span>RQE 22818</span>
            </div>
            <p className="text-foreground/80 md:text-lg/relaxed leading-relaxed mb-4">
              Com vasta experiência em oftalmologia, a Dra. Jacqueline dedica-se a proporcionar a melhor qualidade visual para seus pacientes. Especialista em tratamentos modernos e personalizados, ela combina tecnologia de ponta com um atendimento humanizado.
            </p>

            <div className="space-y-3 mt-2 pr-4 relative">
              <div className="absolute top-0 bottom-0 left-[3px] w-px bg-primary/20 -z-10" />
              {[
                "Graduação pela Universidade do Vale do Itajaí (Santa Catarina)",
                "Residência médica em Oftalmologia pelo Hospital Quarteirão da Saúde (São Paulo)",
                "Fellowship em Retina Clínica pela Benvista (São Paulo)",
                "Membro do Conselho Brasileiro de Oftalmologia",
                "Título de especialista em Oftalmologia pela AMB e CBO"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 ring-4 ring-background" />
                  <p className="text-foreground/80 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="shadow-md btn-agendar-consulta">
                <a href="#contact">Agendar Consulta</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Conhecer Serviços</a>
              </Button>
            </div>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
