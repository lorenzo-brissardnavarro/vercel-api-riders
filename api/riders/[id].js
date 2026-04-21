export default function handler(req, res) {
  const { id } = req.query;

  const riders = [
    { id: "1", name: "Julien" },
    { id: "2", name: "Sarah" }
  ];

  const rider = riders.find(r => r.id === id);

  if (!rider) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(rider);
}