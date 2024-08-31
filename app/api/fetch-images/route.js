// app/api/fetch-images/route.js
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  try {
    const result = await cloudinary.v2.search
      .expression(`folder:${folder}`)
      .execute();

    return NextResponse.json(result.resources);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching images' }, { status: 500 });
  }
}
