import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import MotionContainer from "@/components/ui/motion-container";

export default function ContactSection() {

  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <MotionContainer className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Entre em Contato
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
            Estamos prontos para atender você. Entre em contato pelos canais abaixo.
          </p>
        </MotionContainer>
        <div className="flex justify-center">
          <MotionContainer delay={0.2} className="w-full max-w-2xl grid gap-8 md:grid-cols-2">
            <a href="mailto:centraldavisaobc@gmail.com" className="group">
              <Card className="h-full p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-primary/30 bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-0 flex flex-col items-center text-center gap-5 relative z-10">
                  <div className="bg-white shadow-sm border border-primary/10 p-5 rounded-full group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-slate-800">Email</h3>
                    <span className="text-slate-600 font-medium">centraldavisaobc@gmail.com</span>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://wa.me/5547989146073" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-primary/30 bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-0 flex flex-col items-center text-center gap-5 relative z-10">
                  <div className="bg-white shadow-sm border border-primary/10 p-5 rounded-full group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-slate-800">WhatsApp</h3>
                    <span className="text-slate-600 font-medium">(47) 98914-6073</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
