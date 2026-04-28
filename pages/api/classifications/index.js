import classifications from '../../../data/classifications.json'
import riders from '../../../data/riders.json'

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  const result = {}

  for (const key in classifications) {
    const item = classifications[key]

    if (key === "bestTeam") {
      result[key] = item
      continue
    }

    const rider = riders.find(r => r.id === item.riderId)

    result[key] = {
      ...item,
      rider
    }
  }

  res.status(200).json(result)
}