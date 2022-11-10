import { TagContainer } from '../TagContainer/TagContainer'
import styles from './Container.module.css'

export const Container = ({ el }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <div>
          <span>Description:</span> {el.description}
        </div>
        <div>
          <span>Released:</span> {el.released.split('T')[0]}
        </div>
      </div>
      <TagContainer id={el.released} />
    </div>
  )
}
