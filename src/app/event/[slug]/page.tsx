import H1 from "@/components/h1";
import Image from "next/image";
import React from "react";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const resposne = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const dataEvent = await resposne.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={dataEvent.imageUrl}
          alt={dataEvent.name}
          className="object-cover blur-3xl z-0"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={dataEvent.imageUrl}
            alt={dataEvent.name}
            width={300}
            height={201}
          />
          <div className=" flex flex-col">
            <p className=" text-white/75">
              {new Date(dataEvent.date).toLocaleString("default", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {dataEvent.name}
            </H1>
            <p className="whitepsace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{dataEvent.organizer}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 border-white/10  border-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{dataEvent.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{dataEvent.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg text-white/75 leading-8 tracking">
      {children}
    </p>
  );
}
