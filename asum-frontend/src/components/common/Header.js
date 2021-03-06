import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.88);
    z-index: 10;
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
    .logo {
        font-size: 1.5rem;
        font-weight: 900;
        letter-spacing: 0.1px;
        color: ${palette.cyan[4]};
    }
    .right {
        display: flex;
        align-items: center;
    }
    .regimenu {
        border-radius: 3px;
        &:hover {
        color: ${palette.cyan[4]};
        border: 1px solid ${palette.cyan[4]};
    }
    }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록해 주는 컴포넌트
 */
const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

const HeaderMenu = styled.div`
    font-weight: 600;
    font-size: 0.85rem;
    margin-right: 3rem;
    font-weight: bold;
    color: ${palette.gray[7]};
    &:hover {
        color: ${palette.gray[5]};
        font-weight: 700;
    }
`;

const Header = ({ user, onLogout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        ASUM
                    </Link>
                        {user ? (
                            <div className="right">
                                <Link to="/host/apply">
                                    <HeaderMenu>호스트 신청</HeaderMenu>
                                </Link>
                                <UserInfo>{user.username}</UserInfo>
                                <Button onClick={onLogout}>로그아웃</Button>
                            </div>
                        ) : (
                            <div className="right">
                                <Link to="/host/apply">
                                    <HeaderMenu>호스트 신청</HeaderMenu>
                                </Link>
                                <Link to="/login">
                                    <HeaderMenu>로그인</HeaderMenu>
                                </Link>
                                <Button to="/registerSelect" className="regimenu">
                                    회원가입
                                </Button>
                            </div>
                        )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;