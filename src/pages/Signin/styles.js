import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    img {
        width: 120px;
        height: 120px;
    }

    form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        input {
            padding: 15px 20px;
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
            margin-bottom: 10px;
            border-radius: 4px;

            &::placeholder {
                color: #fff;
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            background: #498ffa;
            font-size: 16px;
            font-weight: bold;
            padding: 10px 15px;
            border-radius: 4px;
            color: #fff;
        }
    }

    div {
        margin-top: 20px;
        a {
            font-weight: bolder;
            color: #fff;
        }
    }
`;
