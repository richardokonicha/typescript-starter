import { idSchema } from "../../../libs/schema";
import { z } from "zod";

export const payloadSchema = z.object({
  // @ts-ignore
  id: idSchema,
  isTwoFactorAuth: z.boolean().optional(),
});

export type Payload = z.infer<typeof payloadSchema>;
