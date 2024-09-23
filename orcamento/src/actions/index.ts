'use server';

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createBudget(formData: FormData) {
  const salary = parseFloat(formData.get("salary") as string); // Salário
    const fixed_expenses =
      parseInt(formData.get("fixed_expenses") as string) || 17; // Gastos fixos
    const transport = parseInt(formData.get("transport") as string) || 6; // Transporte
    const investment = parseInt(formData.get("investment") as string) || 24; // Investimento
    const leisure = parseInt(formData.get("leisure") as string) || 12; // Lazer
    const food = parseInt(formData.get("food") as string) || 18; // Comida
    const variety = parseInt(formData.get("variety") as string) || 9; // Variados
    const savings = parseInt(formData.get("savings") as string) || 13; // Reserva
  // Calcula os valores baseados nas porcentagens
  const budget = {
    fixed_expenses: (salary * fixed_expenses) / 100,
    transport: (salary * transport) / 100,
    investment: (salary * investment) / 100,
    leisure: (salary * leisure) / 100,
    food: (salary * food) / 100,
    variety: (salary * variety) / 100,
    savings: (salary * savings) / 100,
  };

  // Soma das porcentagens informadas
  const totalPercentage =
    fixed_expenses +
    transport +
    investment +
    leisure +
    food +
    variety +
    savings;

  try {
    // Verifica se a soma das porcentagens não ultrapassa 100%
    if (totalPercentage > 100) {
      throw new Error("A soma das porcentagens não pode ultrapassar 100%");
    }

    // Salva o orçamento no banco de dados
    await db.budget.create({
      data: {
        salary: salary,
        ...budget, // Espalha os valores calculados para serem salvos
      },
    });

    
  } catch (error:any) {
    console.error("Erro ao criar orçamento:", error.message);
    throw new Error(error.message); // Propaga o erro para ser tratado na interface, se necessário
  }
  redirect('/')
}
