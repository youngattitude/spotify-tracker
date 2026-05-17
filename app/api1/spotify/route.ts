export async function GET(req: Request) {
  const spotifyUrl =

    "https://open.spotify.com/album/42TFqlT3IYEIdIcfIa7w7K";



  const ip =
    req.headers.get("x-forwarded-for") || "unknown";

  const userAgent =
    req.headers.get("user-agent") || "unknown";

  console.log({
    event: "spotify_click",
    ip,
    userAgent,
    timestamp: new Date().toISOString(),
  });

  return Response.redirect(spotifyUrl, 302);
}
