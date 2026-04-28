import jerseys from '../../../data/jerseys.json'

export default function handler(req, res) {
  res.status(200).json(jerseys)
}