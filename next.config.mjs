/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'kixfgqknzwlvvqtegrjq.supabase.co',
              port: '',
              pathname: '/**/*',
            },
          ],
    }
};

export default nextConfig;
