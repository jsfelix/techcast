import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GoChevronLeft } from 'react-icons/go'
import { ImPlay3 } from 'react-icons/im';
import Image from 'next/image';
import { useRouter } from 'next/router';
import convertDurationToTimeString from '../../helpers/convertDurationToTimeString';
import api from '../../services/api';

import styles from './episode.module.scss';
import Link from 'next/link';

type EpisodeProps = {
  episode: Episode;
}

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  publishedAt: string;
}

export default function Episode({ episode }: EpisodeProps) {
  const router = useRouter();

  return (
    <div className={styles.episode}>
      <div className={styles.thumbnailContainer}>
        <Link href="/">
          <button type="button">
            <GoChevronLeft />
          </button>
        </Link>

        <Image 
          width={700} 
          height={160} 
          src={episode.thumbnail} 
          objectFit="cover"
        />
        <button type="button">
          <ImPlay3 />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div 
        className={styles.description} 
        dangerouslySetInnerHTML={{ __html: episode.description}} 
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await api.get(`/episodes/${params.slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR}),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return { 
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}