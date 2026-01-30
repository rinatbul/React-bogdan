import { Person } from './Person'
import { persons } from '../data/persons'

export const Persons = () => {
  return (
    <div className='cards'>
      {persons.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}
