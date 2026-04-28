import riders from '../../../data/riders.json'

export default function handler(req, res) {
  const { id } = req.query

  const rider = riders.find(r => r.id === parseInt(id))

  if (!rider) {
    return res.status(404).json({ error: 'Rider not found' })
  }

  res.status(200).json(rider)
}