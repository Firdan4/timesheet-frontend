import { activitieSchema } from "@/schema/activities";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDuration(time1: string, time2: string) {
  const timeParts1 = time1.split(":").map(Number);
  const timeParts2 = time2.split(":").map(Number);

  const seconds1 = timeParts1[0] * 3600 + timeParts1[1] * 60 + timeParts1[2];
  const seconds2 = timeParts2[0] * 3600 + timeParts2[1] * 60 + timeParts2[2];

  const durationSeconds = Math.abs(seconds2 - seconds1);

  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const seconds = durationSeconds % 60;

  return `${hours} jam ${minutes} menit ${seconds} detik`;
}

export const calculateTotal = (
  data: z.infer<typeof activitieSchema>[],
  hourlyRate: number
): { totalDuration: string; totalIncome: string } => {
  let totalDurationInSeconds = 0;
  data.forEach((item) => {
    const timeStart = new Date(`1970-01-01T${item.timeStart}Z`).getTime();
    let timeEnd = new Date(`1970-01-01T${item.timeEnd}Z`).getTime();

    if (timeEnd < timeStart) {
      timeEnd += 24 * 60 * 60 * 1000;
    }

    const duration = (timeEnd - timeStart) / 1000;
    totalDurationInSeconds += duration;
  });

  // Konversi total durasi ke jam, menit, dan detik
  const hours = Math.floor(totalDurationInSeconds / 3600);
  const minutes = Math.floor((totalDurationInSeconds % 3600) / 60);
  const seconds = Math.floor(totalDurationInSeconds % 60);

  // Format total durasi
  const totalDuration = `${hours} jam, ${minutes} menit, ${seconds} detik`;

  // Hitung total pendapatan
  const totalHours = totalDurationInSeconds / 3600;
  const totalIncome = totalHours * hourlyRate;

  const formatTotalIncome = totalIncome.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  });

  return { totalDuration, totalIncome: formatTotalIncome };
};
