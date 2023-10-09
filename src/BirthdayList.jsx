import Person from "./Person";

const BirthdayList = ({list}) => {
    return (
        <ul>
            {list.map((person) => {
            return (
                    <Person key={person.id} {...person}/>
                )
            })}
        </ul>
    )
}
export default BirthdayList