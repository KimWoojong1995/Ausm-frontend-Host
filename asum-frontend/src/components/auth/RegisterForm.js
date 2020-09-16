import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const RegisterBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

/* 흰색 박스 */
const RegisterBox = styled.div`
.logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;
    color: ${palette.cyan[4]};
    letter-spacing: 0.5px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
border: 1px solid ${palette.gray[3]};
padding: 2rem;
width: 360px;
background: white;
border-radius: 2px;
margin-top: 4rem;
margin-bottom: 4rem;
`;

const RegisterFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
        font-size: 1.18rem;
    }
    font-size: 0.97rem;
    .genderBtn {
        font-size: 0.9rem;
        border: 1px solid ${palette.gray[5]};
        padding: 0.65rem 0rem;
        margin: 0.4rem 0rem 1.3rem 0rem;
        outline: none;
        width: 49.559%;
        margin-left: 0.05rem;
    }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
    font-size: 0.95rem;
    border: 1px solid ${palette.gray[5]};
    padding: 0.65rem 0rem;
    margin: 0.4rem 0rem 1.3rem 0rem;
    outline: none;
    width: 100%;
    &:focus {
        ::placeholder {
        color: transparent;
        }
    }
    
    ::placeholder {
        padding-left: 0.7rem;
        color: ${palette.gray[5]};
    }
`;




 const RegisterForm = () => {
    return (
        <RegisterBlock>
            <RegisterBox>
                <div className="logo-area">
                    ASUM
                </div>
                <RegisterFormBlock>
                    <h3>회원가입</h3>
                    이름 <StyledInput
                            autoComplete="username"
                            name="username"
                            placeholder="이름을 입력해주세요."
                        />
                    이메일 <StyledInput
                            autoComplete="email"
                            name="email"
                            placeholder="ID@email.com"
                        />
                    비밀번호 <StyledInput
                            autoComplete="new-password"
                            name="password"
                            placeholder="비밀번호"
                            type="password"
                        />
                    비밀번호 확인 <StyledInput
                                autoComplete="new-password"
                                name="passwordConfirm"
                                placeholder="비밀번호를 한번 더 입력해주세요."
                                type="password"
                            />
                    성별<br/>
                    <Button className="genderBtn">남성</Button>
                    <Button className="genderBtn">여성</Button>
                </RegisterFormBlock>
            </RegisterBox>
        </RegisterBlock>
    );
 };

 export default RegisterForm;