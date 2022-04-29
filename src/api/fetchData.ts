// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const ENDPOINT = 'https://metadata-lilac.vercel.app/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { url } = req.query;
    if (!url) {
      res.status(400).json({ errMsg: 'invalid url' });
      return;
    }
    const result = await fetch(`${ENDPOINT}?url=${req.query.url}`);
    const json = await result.json();
    res.status(200).json(json);
  } catch (e: any) {
    res.status(500).json({ errMsg: e?.message });
  }
}
