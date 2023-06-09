import styles from './index.module.sass'

const Waves = () => {
  return (
    <svg className={styles.waves} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering='auto'>
        <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
        </defs>
        <g>
            <use className={`${styles.waveOne} fill-bg-quinary`} xlinkHref='#gentle-wave' x='48' y='0'  />
            <use className={`${styles.waveTwo} fill-bg-tertiary`} xlinkHref='#gentle-wave' x='48' y='3'/>
            <use className={`${styles.waveThree} fill-bg-secondary`} xlinkHref='#gentle-wave' x='48' y='5' />
            <use className={`${styles.waveFour} fill-bg-primary`} xlinkHref='#gentle-wave' x='48' y='7' />
        </g>
    </svg>
  )
}

export default Waves