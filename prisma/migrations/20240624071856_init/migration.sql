-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "date_of_insert" TIMESTAMP(3) NOT NULL,
    "time_of_insert" TIMESTAMP(3) NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "ordinal_date" TIMESTAMP(3) NOT NULL,
    "month_selected" TEXT NOT NULL,
    "day_selected" INTEGER NOT NULL,
    "branch" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "comment_type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "related_section" TEXT NOT NULL,
    "receipt_number" TEXT,
    "description" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
