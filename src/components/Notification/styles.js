import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`;

export const Badge = styled.button`
    position: relative;
    border: 0;
    background: #fff;
    position: relative;

    &::after {
        ${props =>
            props.hasRead &&
            css`
                content: '';
                width: 8px;
                height: 8px;
                top: 0;
                right: 0;
                position: absolute;
                border-radius: 50%;
                background: #ff892e;
            `}
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    max-height: 300px;
`;

export const NotificationList = styled.div`
    position: absolute;
    width: 300px;
    left: calc(50% - 150px);
    top: calc(50% + 30px);
    background: rgba(0, 0, 0, 0.6);
    padding: 15px 10px;
    border-radius: 4px;

    display: ${props => (props.isVisible ? 'block' : 'none')};

    &::before {
        content: '';
        position: absolute;
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        border-bottom: 20px solid rgba(0, 0, 0, 0.6);
        left: calc(50% - 20px);
        top: -20px;
        width: 0;
        height: 0;
    }
`;

export const NotificationItem = styled.div`
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 12px;

    & + div {
        border-top: 1px solid #666;
    }

    div {
        color: #666;
        padding-top: 5px;

        span {
            margin-right: 20px;
        }

        button {
            background: none;
            border: 0;
            color: #666;

            ${props =>
                props.unread &&
                css`
                    &::after {
                        content: '';
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        background: #ff892e;
                        border-radius: 50%;
                        margin-left: 10px;
                    }
                `}
        }
    }
`;
