import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff;
    height: 64px;
`;

export const Content = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    nav {
        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
                margin-right: 15px;
            }
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;

    p {
        display: flex;
        flex-direction: column;
        text-align: right;
        justify-content: center;
        margin-right: 10px;

        a {
            color: #666;
        }
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;
