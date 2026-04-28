import stages from '../../../data/stages.json'

export default function handler(req, res) {
  res.status(200).json(stages)
}