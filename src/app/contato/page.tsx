"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: "success" | "error";
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "success"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          title: "Mensagem Enviada!",
          message: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
          type: "success"
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setModalState({
          isOpen: true,
          title: "Erro no Envio",
          message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
          type: "error"
        });
      }
    } catch (error) {
      console.error(error);
      setModalState({
        isOpen: true,
        title: "Erro no Envio",
        message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />

      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Entre em contato pelos nossos canais ou preencha o formulário abaixo.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Canais de Atendimento</h2>
              <p className="text-gray-600 mb-8">
                Nossa equipe está disponível de segunda a sexta, das 9h às 18h, para tirar suas dúvidas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefone / WhatsApp</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <a href="#" className="text-sm text-secondary hover:underline">Iniciar conversa no WhatsApp</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">jpatech.inovation@gmail.com</p>
                  <a href="mailto:jpatech.inovation@gmail.com" className="text-sm text-secondary hover:underline">Enviar e-mail</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Localização</h3>
                  <p className="text-gray-600">Brasília - DF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" name="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" name="phone" placeholder="(11) 99999-9999" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" name="subject" placeholder="Como podemos ajudar?" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Descreva sua necessidade ou dúvida..." 
                  className="min-h-[150px]"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Anexar Arquivo (Opcional)</Label>
                <Input id="file" type="file" className="cursor-pointer" />
                <p className="text-xs text-gray-500">Formatos aceitos: PDF, DOC, JPG, PNG (Máx. 5MB)</p>
              </div>

              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
