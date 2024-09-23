-- CreateTable
CREATE TABLE "budget" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "salary" DECIMAL NOT NULL,
    "fixed_expenses" INTEGER NOT NULL,
    "transport" INTEGER NOT NULL,
    "investment" INTEGER NOT NULL,
    "leisure" INTEGER NOT NULL,
    "food" INTEGER NOT NULL,
    "variety" INTEGER NOT NULL,
    "savings" INTEGER NOT NULL
);
