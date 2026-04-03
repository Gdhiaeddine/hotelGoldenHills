
import { gastro } from "@/data/gastro";
import { notFound } from "next/navigation";
import GastroClient from "./GastroClient";



type Props = {
    params: Promise<{
        gastro: string
    }>
}

export default async function page({ params }: Props) {
    const ResolvedParams = await params;
    const slug = ResolvedParams.gastro.toLowerCase().trim()
    const gastroType = gastro.find((g) => g.name === slug);

    if (!gastroType) return notFound();

    return (
        <>
            <GastroClient gastro={gastroType} />
        </>
    )
}
