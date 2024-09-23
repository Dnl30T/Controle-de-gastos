/*
  Warnings:

  - You are about to alter the column `fixed_expenses` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `food` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `investment` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `leisure` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `savings` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `transport` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - You are about to alter the column `variety` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_budget" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "salary" DECIMAL NOT NULL,
    "fixed_expenses" DECIMAL NOT NULL,
    "transport" DECIMAL NOT NULL,
    "investment" DECIMAL NOT NULL,
    "leisure" DECIMAL NOT NULL,
    "food" DECIMAL NOT NULL,
    "variety" DECIMAL NOT NULL,
    "savings" DECIMAL NOT NULL
);
INSERT INTO "new_budget" ("fixed_expenses", "food", "id", "investment", "leisure", "salary", "savings", "transport", "variety") SELECT "fixed_expenses", "food", "id", "investment", "leisure", "salary", "savings", "transport", "variety" FROM "budget";
DROP TABLE "budget";
ALTER TABLE "new_budget" RENAME TO "budget";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
