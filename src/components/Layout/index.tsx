import react from 'react';
import { Container, Wrapper } from './styles'
import MenuBar from '../MenuBar'
import Main from '../Main'

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <MenuBar />
                <Main />
                {/* <SideBar /> */}
            </Wrapper>
        </Container>
    );
}

export default Layout;
