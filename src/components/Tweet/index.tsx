import React from 'react';

import { 
    Container, 
    Retweeted, 
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status,  
    CommentIcon, 
    LikeIcon, 
    RetweetIcon, 
    RetweetedIcon
} from './styles'

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Anderson André</strong>
                        <span>anderson-andre-p</span>
                        <Dot />
                        <time>15 de mai</time>
                    </Header>

                    <Description>
                        Foguete não tem ré
                    </Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            23
                        </Status>
                        <Status>
                            <RetweetedIcon />
                            06
                        </Status>
                        <Status>
                            <LikeIcon />
                            756
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;
