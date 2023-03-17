import styles from './index.module.sass'

const Birds = () => {
  return (
    <div className={styles.birds} >
        <div className={styles.birdContainerOne}>
            <div className={styles.birdOne}></div>
        </div>

        <div className={styles.birdContainerTwo}>
            <div className={styles.birdTwo}></div>
        </div>

        <div className={styles.birdContainerThree}>
            <div className={styles.birdThree}></div>
        </div>

        <div className={styles.birdContainerFour}>
            <div className={styles.birdFour}></div>
        </div>
    </div>
  )
}

export default Birds
