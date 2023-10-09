const Person = ({name, age, image}) => {
  return (
    <li>
        <div className="person">
            <img src={image} alt={name} className="img"/>
            <div>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        </div>
    </li>
  )
}
export default Person