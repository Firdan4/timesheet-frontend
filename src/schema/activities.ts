import { z } from "zod";

const activitieSchema = z.object({
  dateStart: z
    .string({
      required_error: "Date start is required!",
    })
    .date(),
  dateEnd: z
    .string({
      required_error: "Date end is required!",
    })
    .date(),
  timeStart: z
    .string({
      required_error: "Time start is required!",
    })
    .time(),
  timeEnd: z
    .string({
      required_error: "Time end is required!",
    })
    .time(),
  activitieName: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  projectName: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
});

export { activitieSchema };
