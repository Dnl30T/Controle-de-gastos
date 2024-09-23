"use server";

import Header from "@/components/util/header";
import { db } from "@/db";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Container,
  TextField,
  Box,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import * as actions from "@/actions";

export default async function CreateBudget() {
  
  const newBudget = actions.createBudget.bind(FormData)

  return (
    <div>
      <Header />
      <Container className="flex mt-24 justify-center w-screen">
        <form action={newBudget} className="flex flex-col items-center">
          <div>
            <TextField
              required
              label="Entrada"
              id="salary"
              name="salary"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Gastos fixos"
              id="fixed_expenses"
              name="fixed_expenses"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Transporte"
              id="transport"
              name="transport"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Investimento"
              id="investment"
              name="investment"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <div>
            <TextField
              label="Lazer"
              id="leisure"
              name="leisure"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Comida"
              id="food"
              name="food"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Variados"
              id="variety"
              name="variety"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Reserva"
              id="savings"
              name="savings"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="max-w-fit mt-4 bg-black"
          >
            Gerar orçamento
          </Button>
        </form>
      </Container>
      <Container className="flex mt-24 justify-center">
        <Box className="text-center">
          <Typography variant="h4" color="inherit">
            Organize seus gastos!
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Digite o valor total das entradas e a porcentagem que você deseja
            alocar para cada uma das categorias. O padrão é:
          </Typography>
          <List className="flex justify-center">
            <ListItem>Gastos fixos: 17%</ListItem>
            <ListItem>Transporte: 6%</ListItem>
            <ListItem>Investimento: 24%</ListItem>
            <ListItem>Alimentação: 18%</ListItem>
            <ListItem>Lazer: 12%</ListItem>
            <ListItem>Despesas variadas: 9%</ListItem>
            <ListItem>Reserva: 13%</ListItem>
          </List>
          <Typography variant="body2" color="textSecondary">
            *Baseados em um salário mínimo. Não cosidera custos de
            vivência
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
