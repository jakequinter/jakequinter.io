import type { NextApiRequest, NextApiResponse } from 'next'
const cloudinary = require('cloudinary').v2;

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request({ timestamp, upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET, use_filename: true }, process.env.CLOUDINARY_SECRET);

    res.status(200).json({ timestamp, signature}); 
  } catch (error) {
    res.status(500).send({message: 'Server Error'});
  }
}