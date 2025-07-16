export function formatEpisode(seasonNumber: number, episodeNumber: number) {
  const season = seasonNumber.toString().padStart(2, "0");
  const episode = episodeNumber.toString().padStart(2, "0");
  return `S${season}E${episode}`;
}
