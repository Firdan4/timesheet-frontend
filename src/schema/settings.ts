import { z } from "zod";

const settingSchema = z.object({
  name: z
    .string({
      required_error: "Name is Required!",
    })
    .min(5, { message: "Must be 5 or more characters long" }),
  rate: z.number(),
});

export { settingSchema };
