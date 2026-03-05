import { Elysia } from "elysia";
import type { ErrorResponse } from "./api-error";
import { educationRoute } from "./education-route";
import { experience } from "./experience";
import { profileRoute } from "./profile";
import { project } from "./project";
import { testimonial } from "./testimonial";

export const app = new Elysia({ prefix: "/api" })
  .use(project)
  .use(testimonial)
  .use(profileRoute)
  .use(experience)
  .use(educationRoute)
  .onError(({ code, error }) => {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return {
      message,
      status: `${code}`,
    } satisfies ErrorResponse;
  });

export const GET = app.handle;
