

interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  state: string;
}


export const LiteralObjects = () => {

  const person: Person = {
    fullName: 'Tomas',
    age: 24,
    address: {
      country: 'Argentina',
      state: 'Mendoza'
    }
  };


  return (
    <>
      <h3>Literal Objects</h3>
      <code>
        <pre>
          { JSON.stringify(person, null, 2) }
        </pre>
      </code>
    </>
  )
}
