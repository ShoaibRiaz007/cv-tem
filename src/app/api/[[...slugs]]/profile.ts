import Elysia from "elysia";
import { prisma } from "@/lib/prisma";

export const profileRoute = new Elysia({ prefix: "/profile" }).get(
  "/",
  async () => {
    return await prisma.profile.findFirst();
  },
);
