
type Props = {
  children: JSX.Element | JSX.Element[]
}

const GuestRoute = ({children}: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default GuestRoute