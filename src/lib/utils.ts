import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getEvents = unstable_cache(async function (
  city: string,
  page = 1
) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     next: {
  //       revalidate: 300,
  //     },
  //   }
  // );
  // const events: EventoEvent[] = await response.json();

  // const events =
  //   city === "all"
  //     ? await prisma.eventoEvent.findMany()
  //     : await prisma.eventoEvent.findMany({
  //         where: {
  //           city: capitalizeFirst(city),
  //         },
  //       });

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeFirst(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalizeFirst(city),
      },
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async function (slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
