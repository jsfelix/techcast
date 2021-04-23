import format from  'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Header() {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.container}>
      <Image width={166} height={28} src="/logo.png" alt="Techcast" />

      <p>Podcasts de qualidade para você</p>

      <span>{currentDate}</span>
    </header>
  )
}
