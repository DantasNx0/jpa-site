import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  company: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  serviceType: z.string().min(1, "Tipo de serviço é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  deadline: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quoteSchema.parse(body);

    const quote = await prisma.quote.create({
      data,
    });

    return NextResponse.json({ success: true, quote }, { status: 201 });
  } catch (error) {
    console.error("Erro ao processar orçamento:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
