import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({ name: 'John Doe' });
}
