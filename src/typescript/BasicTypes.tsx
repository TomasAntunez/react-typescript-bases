

export const BasicTypes = () => {

  const name: string = 'Tomas';
  const age: number = 35;
  const isActive: boolean = false;

  const powers: string[] = []; // 'Speed', 'Fly', 'Breathe in the water'


  return (
    <>
      <h3>Basic Types</h3>

      { name }, { age }, { isActive ? 'active' : 'not active' }
      <br />

      { powers.join(', ') }
    </>
  )
}
