import styles from './styles.module.scss';

import {ImShuffle, ImHeadphones, ImPrevious2, ImPlay3, ImNext2, ImLoop2} from 'react-icons/im';

export default function Player() {
  return (
    <div className={styles.container}>
      <header>
        <ImHeadphones />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <ImShuffle />
          </button>
          <button type="button">
            <ImPrevious2 />
          </button>
          <button type="button" className={styles.playButton}>
            <ImPlay3 />
          </button>
          <button type="button">
            <ImNext2 />
          </button>
          <button type="button">
            <ImLoop2 />
          </button>
        </div>
      </footer>
    </div>
  )
}
