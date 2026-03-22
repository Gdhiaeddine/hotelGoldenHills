import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const data = await req.json();

    const message = `
🏨 *Nouvelle Réservation — Hotel Golden Hills*

🛏 *Suite/Chambre:* ${data.typeRoom}
👤 *Nom:* ${data.name}
📧 *Email:* ${data.email}
📞 *Téléphone:* ${data.phone}

📅 *Arrivée:* ${data.checkIn}
📅 *Départ:* ${data.checkOut}
🌙 *Nuits:* ${data.nights}
🚪 *Chambres:* ${data.nbRooms}
👥 *Personnes:* ${data.nbPrsn}
    `.trim();

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
        }),
    });

    return NextResponse.json({ success: true });
}
