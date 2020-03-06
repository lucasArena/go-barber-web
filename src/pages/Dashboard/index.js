import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={40} color="#FFF" />
                </button>
                <strong>31 de maio</strong>
                <button type="button">
                    <MdChevronRight size={40} color="#FFF" />
                </button>
            </header>

            <ul>
                <Time past>
                    <time>08:00</time>
                    <span>Lucas Arena</span>
                </Time>

                <Time available>
                    <time>08:00</time>
                    <span>Lucas Arena</span>
                </Time>

                <Time>
                    <time>08:00</time>
                    <span>Lucas Arena</span>
                </Time>

                <Time>
                    <time>08:00</time>
                    <span>Lucas Arena</span>
                </Time>

                <Time>
                    <time>08:00</time>
                    <span>Lucas Arena</span>
                </Time>
            </ul>
        </Container>
    );
}
