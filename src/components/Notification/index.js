import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import {
    Container,
    Badge,
    Scroll,
    NotificationList,
    NotificationItem
} from './styles';

export default function Notification() {
    const [visible, setVisible] = useState(false);

    function handleVisible() {
        setVisible(!visible);
    }
    return (
        <Container>
            <Badge onClick={handleVisible} hasRead>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList isVisible={visible}>
                <Scroll>
                    <NotificationItem unread>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>
                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>

                    <NotificationItem>
                        <span>Você tem um novo agendamento de Lucas Arena</span>
                        <div>
                            <span>Há 1 minuto atrás</span>
                            <button type="button">Marcar como lida</button>
                        </div>
                    </NotificationItem>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
