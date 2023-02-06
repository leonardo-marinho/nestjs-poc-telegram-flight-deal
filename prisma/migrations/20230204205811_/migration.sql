-- CreateTable
CREATE TABLE "BestDeal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pricedDateId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BestDeal_pricedDateId_fkey" FOREIGN KEY ("pricedDateId") REFERENCES "PricedDate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PricedDate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "BestDeal_pricedDateId_key" ON "BestDeal"("pricedDateId");
