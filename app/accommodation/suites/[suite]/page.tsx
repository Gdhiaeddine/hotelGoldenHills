import { rooms, suites } from '@/data/rooms'
import { notFound } from 'next/navigation';
import SuiteClient from './SuiteClient';


type Props = {
  params: Promise<{
    suite: string;
  }>;
};
/*
export function generateStaticParams() {
    return rooms.map((room) => ({
        slug: room.slug,
    }));
}
*/

export default async function Page({ params }: Props) {
  const resolvedParams = await params; // ✅ unwrap

  const slug = resolvedParams.suite.toLowerCase().trim();

  const suite = suites.find((r) => r.slug === slug);

  if (!suite) return notFound();

    return (
        <SuiteClient suite={suite} />
    )
}