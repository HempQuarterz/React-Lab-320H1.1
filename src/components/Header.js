const Header = ({title}) => {
  return (
    <header>
    <h1>{title}</h1>
    </header> 
  )
}

Header.defaultProps = {
    title: 'Employee Directory',
}

export default Header