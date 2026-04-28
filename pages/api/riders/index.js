import riders from '../../../data/riders.json'

export default function handler(req, res) {
  res.status(200).json(riders)
}