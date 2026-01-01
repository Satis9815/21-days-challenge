import { z } from "zod";

export const problemSchema = z.object({
  name: z
    .string()
    .min(3, "Problem name must be at least 3 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  category: z
    .string()
    .min(2, "Category is required"),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  solution: z
    .string()
    .min(10, "Solution code must be at least 10 characters"),
});

export type ProblemFormData = z.infer<typeof problemSchema>;
    