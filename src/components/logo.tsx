import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        width={53}
        height={12}
        alt="Logo"
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      />
    </Link>
  );
}
