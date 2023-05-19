import Link from "next/link";

export default function NextLink ({path, href}) {
    return (
        <Link href={href} passHref>
        Ir para {path}
      </Link>
    )
}