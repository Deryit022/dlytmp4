export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "Masukin URL YouTube" });
    }

    const api = "https://api.nekolabs.my.id/downloader/youtube/v4?url=" + encodeURIComponent(url);
    const r = await fetch(api);
    const data = await r.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}