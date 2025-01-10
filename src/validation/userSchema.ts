
import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  city: z.string(),
  nationality: z.string(),
  monthlyIncome: z.number().min(1),
})