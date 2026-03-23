import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-8 items-center md:items-start text-center md:text-left">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center transition-opacity hover:opacity-80">
               <Image src="https://i.imgur.com/UiDrrUn.jpeg" alt="Central da Visão Logo" width={180} height={47} />
            </a>
            <p className="text-sm text-slate-600 font-medium">
              Cuidando da sua saúde ocular com excelência, tecnologia e dedicação.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Sobre o Doutor
              </a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Tratamentos
              </a>
              <a href="#location" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Onde Estamos
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Fale Conosco
              </a>
            </nav>
          </div>

          {/* Info & Legal */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-bold text-slate-900 mb-1">Informações</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diretor Técnico: Dr. Nome do Médico<br/>
              CRM XX 000000 / RQE 0000
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              Atendimento exclusivamente particular.<br/>
              Consulte disponibilidade e horários.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium text-center md:text-left">
            &copy; {currentYear} Central da Visão. Todos os direitos reservados.
          </p>
        </div>
    </footer>
  );
}
