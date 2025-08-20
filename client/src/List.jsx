import './List.css'

function List() {
  let entries = []
  for(let i = 0; i < 10; i++) {
    entries.push('test')
  }
  return (
    <div className="list-lined">
        <ul>
            {entries.map((item,index) => (
            <li key={`item${index}`}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List