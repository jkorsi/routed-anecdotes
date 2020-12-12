import React from 'react'
import {useField} from '../hooks/index'

const CreateNew = (props) =>
{
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) =>
  {
    e.preventDefault()

    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          Content
          <input {...content} />
        </div>
        <div>
          Author
           
          <input {...author} />
        </div>
        <div>
          Url for more info
          <input {...info} />
        </div>
        <button onClick={handleSubmit}>
          Create
        </button>
        <button onClick={() =>
        {
          info.value = ''
          author.value = ''
          content.value = ''
        }}>
          Reset
        </button>
      </form>
      <br />
    </div>
  )
}

export default CreateNew