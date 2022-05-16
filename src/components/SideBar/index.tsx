import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles'

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title="Pessoas para seguir"
                        elements={[
                            <FollowSuggestion 
                                name="Rafael Maia"
                                nickname="@rafaelmaiach"
                            />,
                            <FollowSuggestion 
                                name="Joel Jota"
                                nickname="@joeljota"
                            />,
                            <FollowSuggestion 
                                name="Andrea Schwarz"
                                nickname="@andrea-schwarz"
                            />,
                        ]}
                    />
                    
                    <List 
                        title="O que está acontecendo"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}

export default SideBar;
