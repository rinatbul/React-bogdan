export const PetInfo = ({ petName, years, hasPet }) => {
  return hasPet ? (
    <h1> {`My ${petName} is ${years} years old`}</h1>
  ) : (
    <h2>Dont have pet</h2>
  )
}
