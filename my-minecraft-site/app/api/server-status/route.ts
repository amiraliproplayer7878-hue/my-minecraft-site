import { NextResponse } from "next/server";

export async function GET() {
  const host = "sv3.tgmc.ir";
  const port = 28090;

  try {
    const response = await fetch(
      `https://api.mcstatus.io/v2/status/java/${host}:${port}`,
      { cache: 'no-store' }
    );
    const data = await response.json();

    return NextResponse.json({
      online: data.online,
      players: data.players?.online || 0,
      maxPlayers: data.players?.max || 0,
      version: data.version?.name_clean || "Unknown",
    });
  } catch (error) {
    return NextResponse.json(
      { online: false, players: 0, maxPlayers: 0, version: "Offline" },
      { status: 500 }
    );
  }
}
