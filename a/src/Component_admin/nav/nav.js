import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function Nav_quan_tri() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Sản phẩm</Nav.Link>
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>Hóa đơn</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Hóa đơn chờ</Dropdown.Item>
                <Dropdown.Item>Hóa đơn hủy</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Link eventKey="link-2">Thống kê</Nav.Link>
            <Nav.Link>
                Người dùng
            </Nav.Link>
        </Nav>
    );
}

export default Nav_quan_tri;