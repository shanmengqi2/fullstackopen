import PersonDetail from './PersonDetail'

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <PersonDetail key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </div>
  )
}


export default Persons