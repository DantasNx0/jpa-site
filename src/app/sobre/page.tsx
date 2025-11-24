import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a JPA Tech</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Conheça nossa história, nossa missão e a equipe apaixonada por transformar negócios através da tecnologia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* História e Missão */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A JPA Tech nasceu com o propósito de democratizar o acesso à tecnologia de ponta para pequenas e médias empresas. 
                Identificamos que muitas organizações enfrentavam desafios de crescimento por falta de digitalização e automação.
              </p>
              <p className="text-gray-600">
                Desde então, temos ajudado dezenas de clientes a otimizar seus processos, reduzir custos e aumentar sua competitividade 
                no mercado através de soluções personalizadas e acessíveis.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-gray-100 h-[300px] rounded-xl flex items-center justify-center">
              <span className="text-gray-400">Imagem da Empresa/Escritório</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.2} className="h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Proporcionar inovação, automação e crescimento sustentável para empresas através de soluções tecnológicas acessíveis e eficientes.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em consultoria e desenvolvimento tecnológico para o mercado PME, reconhecida pela excelência e resultados.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center h-full">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600">
                Transparência, Inovação, Comprometimento com o Cliente, Excelência Técnica e Ética Profissional.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Nossa Equipe</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contamos com times especializados para atender todas as demandas do seu projeto.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Time de Desenvolvimento", role: "Fullstack & Mobile", icon: Users },
              { name: "Time de Automações", role: "IA & Processos", icon: Users },
              { name: "Time de Gestão Comercial", role: "CRM & Vendas", icon: Users },
              { name: "Time de Análise de Dados", role: "BI & Analytics", icon: Users },
            ].map((team, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform duration-300 h-full">
                  <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <team.icon className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{team.name}</h3>
                  <p className="text-secondary text-sm font-medium">{team.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <FadeIn direction="up">
          <h2 className="text-2xl font-bold mb-6">Quer fazer parte dessa história de sucesso?</h2>
          <Button asChild size="lg">
            <Link href="/contato">Entre em contato conosco</Link>
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
