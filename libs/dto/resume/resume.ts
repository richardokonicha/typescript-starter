import { defaultResumeData, idSchema, resumeDataSchema } from "../../schema";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

import { userSchema } from "../user";

export const resumeSchema = z.object({
  id: idSchema,
  title: z.string(),
  slug: z.string(),
  data: resumeDataSchema.default(defaultResumeData),
  visibility: z.enum(["private", "public"]).default("private"),
  locked: z.boolean().default(false),
  userId: idSchema,
  user: userSchema.optional(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

export class ResumeDto extends createZodDto(resumeSchema) {}
