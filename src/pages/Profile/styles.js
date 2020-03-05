import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    max-width: 1000px;
    margin: 50px auto;

    form {
        flex: 1;
        display: flex;
        flex-direction: column;

        hr {
            height: 1px;
            margin: 0 0 10px;
            background: rgba(255, 255, 255, 0.2);
            border: 0;
        }

        button {
            margin-bottom: 10px;
            flex: 1;
            background: #3891fa;
            padding: 15px 20px;
            border-radius: 4px;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            transition: background 0.3s;

            &:hover {
                background: ${lighten(0.03, '#3891fa')};
            }
        }
    }

    input {
        padding: 15px 20px;
        background: rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        color: #fff;
        border-radius: 4px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    button {
        width: 100%;
        background: #f14e6d;
        padding: 15px 20px;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        transition: background 0.3s;

        &:hover {
            background: ${lighten(0.03, '#f14e6d')};
        }
    }
`;
