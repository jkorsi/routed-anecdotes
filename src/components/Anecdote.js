import React from 'react'

const Anecdote = ({anecdote}) =>
{
  console.log('Anecdote in component:', anecdote)
  return (
    <div>
      <h1>{anecdote.content}</h1>
      <div>Has {anecdote.votes} votes.</div>
      <div>
        Link for more about this: <a href={anecdote.info}>{anecdote.info}</a>
      </div>
      <br/>
    </div>
  )
}

export default Anecdote