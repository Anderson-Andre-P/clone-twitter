import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

import Feed from '../Feed'

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>
                    Editar perfil
                </EditButton>
                <h1>Anderson André</h1>
                <h2>@anderson-andre-p</h2>

                <p>
                    Perfil no <a href="https://www.linkedin.com/in/anderson-andre-pereira/" target="_blank">LinkedIn</a>
                </p>

                <ul>
                    <li><LocationIcon /> Itajubá, Brasil</li>
                    <li><CakeIcon /> Nascido(a) em 11 de Abril de 1999</li>
                </ul>

                <Followage>
                    <span>seguindo <strong>103</strong></span>

                    <span><strong>36 </strong>seguidores </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}

export default ProfilePage;
