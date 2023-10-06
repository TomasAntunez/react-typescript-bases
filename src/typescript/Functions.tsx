

export const Functions = () => {

  const add = ( a: number, b: number ): number => {
    return a + b;
  };


  return (
    <>
      <h3>Functions</h3>
      The result is: { add(1, 2) }
    </>
  )
}
