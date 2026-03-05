import Elysia from "elysia";
import { prisma } from "@/lib/prisma";

export const educationRoute = new Elysia({ prefix: "/education" }).get(
  "/",
  async () => {
    return await prisma.education.findMany({
      orderBy: { order: "asc" },
    });
  },
);
