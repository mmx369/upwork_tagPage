import { TagContainer } from '../TagContainer/TagContainer'
import styles from './Container.module.css'

export const Container = ({ el }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        Description:{el.description}
        <br />
        Released:{el.released}
        <TagContainer id={el.released} />
      </div>
    </div>
  )
}
