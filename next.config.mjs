export default async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
        ],
      },
      env: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
        GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
        CALENDAR_ID_SET_PALACE: process.env.CALENDAR_ID_SET_PALACE,
        CALENDAR_ID_SET_DUO: process.env.CALENDAR_ID_SET_DUO,
      },

      webpack(config) {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|swf|ogv|avi|mov)$/, // Archivos de video
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
            },
          },
        });
    
        return config;
      },
    };
    return nextConfig;
  };
  