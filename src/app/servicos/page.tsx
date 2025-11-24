import { Button } from "@/components/ui/Button";
import { BarChart, Code, Database, Headphones, Lightbulb, Settings } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Consultoria em TI",
    icon: Lightbulb,
    description: "Planejamento estratégico e diagnóstico tecnológico para alinhar TI aos objetivos do seu negócio.",
    features: [
      "Planejamento estratégico",
      "Diagnóstico de sistemas",
      "Análise de requisitos",
      "Segurança da informação",
      "Conformidade com LGPD"
    ]
  },
  {
    title: "Desenvolvimento de Soluções",
    icon: Code,
    description: "Criação de softwares sob medida, sites e aplicativos para modernizar sua presença digital.",
    features: [
      "Sites institucionais e landing pages",
      "Sistemas gerenciais",
      "Apps mobile e desktop",
      "APIs e Integrações",
      "Soluções em nuvem"
    ]
  },
  {
    title: "Manutenção e Suporte",
    icon: Headphones,
    description: "Garantia de estabilidade e segurança para sua infraestrutura tecnológica.",
    features: [
      "Correção de falhas",
      "Manutenção de computadores",
      "Monitoramento preventivo",
      "Suporte técnico especializado",
      "Atualizações de segurança"
    ]
  },
  {
    title: "Automações",
    icon: Settings,
    description: "Otimização de processos repetitivos para aumentar a eficiência e reduzir erros operacionais.",
    features: [
      "Automação de fluxos de trabalho",
      "Implementações com IA",
      "Automação de tarefas manuais",
      "Otimização de processos",
      "Integração de ferramentas"
    ]
  },
  {
    title: "Análise de Dados",
    icon: Database,
    description: "Transformação de dados brutos em inteligência de negócio para decisões assertivas.",
    features: [
      "Estruturação de dados",
      "Business Intelligence (BI)",
      "Análise descritiva e diagnóstica",
      "Dashboards inteligentes",
      "Relatórios gerenciais"
    ]
  },
  {
    title: "Gestão Comercial",
    icon: BarChart,
    description: "Ferramentas e estratégias para potencializar suas vendas e relacionamento com clientes.",
    features: [
      "Marketing digital",
      "Gestão de relacionamento (CRM)",
      "Fortalecimento de marca",
      "Automação comercial",
      "Funil de vendas"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Soluções completas e integradas para impulsionar a transformação digital da sua empresa.
          </p>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-gray-50 bg-gray-50/50">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm h-10">{service.description}</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full hover:bg-primary hover:text-white transition-all duration-300" variant="outline">
                  <Link href={`/orcamento?servico=${encodeURIComponent(service.title)}`}>
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Não encontrou o que precisa?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entendemos que cada negócio é único. Entre em contato para discutirmos uma solução personalizada para sua necessidade.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Falar com Especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
