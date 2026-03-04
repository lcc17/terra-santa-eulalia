'use client';
import VideoEmbed from '@/components/domesticos/VideoEmbed';

export default function DomesticVideos() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-4xl font-serif mb-12 text-center">Productos en Video</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <VideoEmbed url="https://www.youtube.com/watch?v=casXEgFpFRQ" title="Cómo aplicar arcilla" />
        <VideoEmbed url="https://www.youtube.com/watch?v=LXb3EKWsInQ" title="Masaje craneal básico" />
      </div>
    </div>
  );
}