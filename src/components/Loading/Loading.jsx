import { FadeLoader } from 'react-spinners'
const override = {
    display: "block",
    margin: "40px auto",
    borderColor: "red",
    top: '25px',
  };
export default function Loading() {
  return <>
      <FadeLoader
          color={'#35AFA0'}
          cssOverride={override}
          margin={25}
          radius={10}
          height={30}
          width={8}
          aria-label="Loading Spinner"
          data-testid="loader"
      />
  </>
}
