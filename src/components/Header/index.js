import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Profile } from './styles';

import logo from '../../assets/images/logo-purple.svg';

import Notifications from '../Notification';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Wrapper>
            <Content>
                <nav>
                    <Link to="/">
                        <img src={logo} alt="Gobaber logo" />
                        <strong>DASHBOARD</strong>
                    </Link>
                </nav>
                <aside>
                    <Profile>
                        <Notifications />

                        <p>
                            <strong>{profile.name}</strong>
                            <Link to="profile">
                                <span>Meu perfil</span>
                            </Link>
                        </p>
                        <img
                            src={
                                profile.avatar.url ||
                                'https://api.adorable.io/avatars/50/demo@adorable.io.png'
                            }
                            alt="Foto perfil"
                        />
                    </Profile>
                </aside>
            </Content>
        </Wrapper>
    );
}
