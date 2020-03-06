import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    header {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        justify-content: center;
        align-items: center;

        button {
            background: none;

            svg {
                align-items: center;
            }
        }

        strong {
            color: #fff;
            font-size: 24px;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Time = styled.li`
    background: ${props => (props.past ? 'rgba(255,255,255,0.6)' : '#fff')};
    padding: 35px 25px;

    time {
        font-size: 24px;
        color: ${props => (props.available ? '#999' : '#7159c1')};
    }

    span {
        margin-top: 10px;
        font-size: 16px;
        display: block;
        color: ${props => (props.available ? '#999' : '#666')};
    }
`;
