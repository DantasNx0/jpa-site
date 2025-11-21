import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Code, Database, Laptop, Settings, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme seu negócio com <span className="text-secondary">tecnologia inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Soluções acessíveis e eficientes em desenvolvimento, automação e gestão de dados para impulsionar o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8">
                <Link href="/orcamento">Solicitar Proposta</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8">
                <Link href="/servicos">Conhecer Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Sobre Breve */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
             {/* Placeholder para imagem da equipe/escritório */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                <span className="text-lg">Imagem Institucional</span>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Por que escolher a JPA Tech?</h2>
            <p className="text-gray-600 mb-6">
              A JPA Tech oferece soluções tecnológicas personalizadas para pequenas e médias empresas. 
              Nossa missão é democratizar o acesso à tecnologia de ponta, proporcionando inovação, 
              automação e crescimento sustentável para o seu negócio.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-5 w-5" />
                <span className="text-gray-700">Equipe especializada e multidisciplinar</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-5 w-5" />
                <span className="text-gray-700">Soluções sob medida para sua necessidade</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-5 w-5" />
                <span className="text-gray-700">Foco em resultados e ROI</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/sobre">Saiba mais sobre nós</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Destaque */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossas Soluções</h2>
            <p className="text-gray-600">
              Oferecemos um ecossistema completo de serviços para digitalizar e otimizar sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Sites, sistemas web e aplicativos mobile desenvolvidos com as tecnologias mais modernas do mercado.
              </p>
              <Link href="/servicos" className="text-secondary font-medium hover:underline text-sm inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automação</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Otimize processos repetitivos e aumente a produtividade da sua equipe com soluções inteligentes.
              </p>
              <Link href="/servicos" className="text-secondary font-medium hover:underline text-sm inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Análise de Dados</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Transforme dados em insights valiosos para tomada de decisão estratégica com BI e Dashboards.
              </p>
              <Link href="/servicos" className="text-secondary font-medium hover:underline text-sm inline-flex items-center gap-1">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Pronto para inovar?</h2>
            <p className="text-blue-100 mb-8">
              Entre em contato hoje mesmo e descubra como a JPA Tech pode ajudar sua empresa a alcançar o próximo nível.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none">
              <Link href="/contato">Falar com um consultor</Link>
            </Button>
          </div>
          
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
      </section>
    </div>
  );
}
