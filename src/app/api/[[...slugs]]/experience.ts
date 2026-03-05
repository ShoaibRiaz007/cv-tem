import Elysia from "elysia";
import { prisma } from "@/lib/prisma";

export const experience = new Elysia({ prefix: "/experience" }).get(
  "/",
  async () => {
    return await prisma.experiences.findMany({
      orderBy: { order: "asc" },
    });
  },
);
