import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';


/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */
const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    registerSelect: '회원가입',
};

/**
 * 에러를 보여 줍니다.
 */
 const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                { type === 'login' ? (
                    <div>
                        <StyledInput
                            autoComplete="username"
                            name="username"
                            placeholder="아이디"
                            onChange={onChange}
                            value={form.username}
                        />
                        <StyledInput
                            autoComplete="new-password"
                            name="password"
                            placeholder="비밀번호"
                            type="password"
                            onChange={onChange}
                            value={form.password}
                        />
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <ButtonWidthMarginTop cyan fullWidth sytle={{ marginTop: '1rem' }}>
                            {text}
                        </ButtonWidthMarginTop>
                        <ButtonWidthMarginTop yellow fullWidth sytle={{ marginTop: '1rem' }}>
                            카카오톡으로 로그인
                        </ButtonWidthMarginTop>
                    </div>
                ) : (
                    <div>
                        <Link to='/register'>
                            <ButtonWidthMarginTop fullWidth cyan>
                                이메일로 회원가입
                            </ButtonWidthMarginTop>
                        </Link>
                        <ButtonWidthMarginTop yellow fullWidth>
                            카카오톡으로 회원가입
                        </ButtonWidthMarginTop>
                    </div>
                )}
                
            </form>
            <Footer>
                {type === 'login' ? (
                    <div>
                    <div>아직 회원이 아니세요?</div>
                    <Link to="/registerSelect">회원가입</Link>
                    </div>
                ) : (
                    <div>
                        <div>이미 회원이신가요?</div>
                        <Link to="/login">로그인</Link>
                    </div>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;