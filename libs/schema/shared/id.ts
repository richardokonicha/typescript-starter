import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";

// Define the schema for a CUID2 string
export const idBaseSchema = z
  .string()
  .cuid2()
  .describe("Unique identifier for the item in Cuid2 format");

// Create the idSchema with a default value
export const idSchema = idBaseSchema.default(() => createId());
