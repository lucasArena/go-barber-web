import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    label {
        margin-bottom: 30px;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            border: 3px solid rgba(255, 255, 255, 0.9);
            cursor: pointer;
            background: #666;
        }

        input {
            display: none;
        }
    }
`;
