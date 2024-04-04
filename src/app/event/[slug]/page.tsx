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
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={dataEvent.imageUrl}
          alt={dataEvent.name}
          className="object-cover blur-3xl z-0"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 relative">
          <Image
            src={dataEvent.imageUrl}
            alt={dataEvent.name}
            width={300}
            height={201}
          />
        </div>
      </section>
      <div></div>
    </main>
  );
}
