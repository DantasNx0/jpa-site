"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function OrcamentoForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("servico") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("service"),
      description: formData.get("description"),
      deadline: formData.get("deadline"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Solicitação de orçamento enviada com sucesso! Nossa equipe analisará e entrará em contato.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Erro ao enviar solicitação. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Dados Pessoais */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary border-b pb-2">1. Seus Dados</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" name="name" required placeholder="Seu nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" name="company" placeholder="Nome da sua empresa" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail Corporativo</Label>
            <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone / WhatsApp</Label>
            <Input id="phone" name="phone" required placeholder="(11) 99999-9999" />
          </div>
        </div>
      </div>

      {/* Detalhes do Projeto */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary border-b pb-2">2. Sobre o Projeto</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service">Tipo de Serviço</Label>
            <Select id="service" name="service" defaultValue={initialService}>
              <option value="" disabled>Selecione uma opção</option>
              <option value="Consultoria em TI">Consultoria em TI</option>
              <option value="Desenvolvimento de Soluções">Desenvolvimento de Soluções</option>
              <option value="Manutenção e Suporte">Manutenção e Suporte</option>
              <option value="Automações">Automações</option>
              <option value="Análise de Dados">Análise de Dados</option>
              <option value="Gestão Comercial">Gestão Comercial</option>
              <option value="Outro">Outro</option>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Descrição do Projeto</Label>
          <Textarea 
            id="description" 
            name="description"
            required 
            placeholder="Descreva os objetivos, funcionalidades desejadas e desafios atuais..." 
            className="min-h-[150px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deadline">Prazo Esperado</Label>
          <Select id="deadline" name="deadline" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            <option value="urgente">Urgente (Imediato)</option>
            <option value="1-mes">Curto Prazo (1 mês)</option>
            <option value="3-meses">Médio Prazo (3 meses)</option>
            <option value="flexivel">Flexível</option>
          </Select>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : (
          <>
            Solicitar Orçamento <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solicitar Proposta</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Conte-nos sobre o seu projeto e receba uma proposta personalizada para o seu negócio.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="mb-8 bg-blue-50 p-4 rounded-lg flex gap-3 items-start">
            <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-primary">Por que solicitar um orçamento?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Nossa equipe técnica analisará sua demanda detalhadamente para oferecer a solução com melhor custo-benefício. 
                O retorno é feito em até 24 horas úteis.
              </p>
            </div>
          </div>

          <Suspense fallback={<div>Carregando formulário...</div>}>
            <OrcamentoForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
