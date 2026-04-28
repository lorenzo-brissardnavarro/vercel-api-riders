import stages from '../../../data/stages.json'
import riders from '../../../data/riders.json'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  const { id } = req.query

  const stage = stages.find(s => s.id === parseInt(id))

  if (!stage) {
    return res.status(404).json({ error: 'Stage not found' })
  }

  const enrichedPodium = stage.podium.map(p => {
    const rider = riders.find(r => r.id === p.riderId)

    return {
      rank: p.rank,
      ...rider
    }
  })

  res.status(200).json({
    ...stage,
    podium: enrichedPodium
  })
}