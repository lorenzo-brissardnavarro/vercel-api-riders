export default function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const riders = [
    { id: "1", name: "Julien" },
    { id: "2", name: "Sarah" }
  ];

  res.status(200).json(riders);
}