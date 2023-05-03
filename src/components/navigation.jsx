import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const navigation = () => {
    return (
    <Navbar className="navigation" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React Test</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/create">Create Posts</Link>
        <Link to="/list">List Posts</Link>
      </Nav>
    </Navbar>
    )
}
export default navigation;
