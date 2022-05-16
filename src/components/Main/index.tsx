import react from 'react';
import ProfilePage from '../ProfilePage';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, BellIcon, SearchIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Anderson André</strong>
                    <span>1024 tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
}

export default Main;
