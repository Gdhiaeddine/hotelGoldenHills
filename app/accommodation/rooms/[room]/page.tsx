import { rooms } from '@/data/rooms'
import RoomClient from './RoomClient'
import { notFound } from 'next/navigation';


type Props = {
  params: Promise<{
    room: string;
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

  const slug = resolvedParams.room.toLowerCase().trim();

  const room = rooms.find((r) => r.slug === slug);

  if (!room) return notFound();

    return (
        <RoomClient room={room} />
    )
}