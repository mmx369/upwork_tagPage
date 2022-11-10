import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import styles from './TagContainer.module.css'

export const TagContainer = ({ id }) => {
  const [tags, setTags] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(id))
    if (items) {
      setTags(items)
    }
  }, [id])

  const addTagsHandler = () => {
    if (!value) return
    if (tags.length >= 5) return
    setTags([...tags, value])
    localStorage.setItem(id, JSON.stringify([...tags, value]))
    setValue('')
  }

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index))
    localStorage.setItem(
      id,
      JSON.stringify(tags.filter((el, i) => i !== index))
    )
  }

  return (
    <div>
      <div className={styles.tags_input_container}>
        {tags.map((tag, index) => (
          <div className={styles.tag_item} key={uuidv4()}>
            <span className='text'>{tag}</span>
            <span
              className={styles.tag_item__close}
              onClick={() => removeTag(index)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
      <div className={styles.tags_input_container__footer}>
        <Input
          type='text'
          className='tags-input'
          value={value}
          placeholder='Type somthing'
          onChange={(e) => setValue(e.target.value)}
        />
        <Button children='Add Tag' onClick={addTagsHandler} />
      </div>
    </div>
  )
}
