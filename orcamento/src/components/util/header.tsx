"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const navigateBudget = () => {
    router.push("/home/budget");
  };

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <AppBar position="static" className="bg-black">
      <Toolbar className="flex justify-between">
        <button onClick={navigateHome}>
          <Typography variant="h6" className="text-white">
            Controle de gastos
          </Typography>
        </button>
        <div>
          <Button onClick={navigateBudget} color="inherit" className="mr-4">
            Orçamento
          </Button>
          <Button color="inherit">Resumo do ano</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
