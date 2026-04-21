export default function handler(req, res) {
  const riders = [
    { id: "1", name: "Julien" },
    { id: "2", name: "Sarah" }
  ];

  res.status(200).json(riders);
}