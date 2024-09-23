import { db } from "@/db";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";

export default function CardContainer() {

    const currentExpenses = db.expense.findMany();

  return (
    <div className="p-6 grid-cols-3">
      <Box>
        <Card variant="outlined" className="max-w-fit">
          <CardActionArea>
            <CardContent>
              <Typography variant="h4" color="inherit">
                Gastos fixos
              </Typography>
              <Box className="flex">
                <Box className="chart">
                  <Typography variant="body2" color="inherit">
                    Gasto vs projeção
                  </Typography>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: ["group A", "group B", "group C"],
                      },
                    ]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
                    width={300}
                    height={150}
                  />
                </Box>
                <Box>
                  <Typography variant="h5" color="inherit">
                    Summary
                  </Typography>
                  <Box className="expenses">
                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary="Trash" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Spam" />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
}
