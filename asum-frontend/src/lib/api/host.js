import client from './client';

// 호스트 등록
export const apply = ({ host_image, host_name, host_phone_number, business_type, business_license, bank_account, about, contract, personal_information }) =>
    client.post('http://localhost:3065/host/apply', { host_image, host_name, host_phone_number, business_type, business_license, bank_account, about, contract, personal_information });

// 호스트 계정관리
export const account = ({ host_image, host_name, host_phone_number, business_type, business_license, bank_account, about, contract, personal_information }) =>
    client.post('/api/host/account', { host_image, host_name, host_phone_number, business_type, business_license, bank_account, about, contract, personal_information });

// 로그인 상태 확인
// export const check = () => client.get('/api/auth/check');

// 로그아웃
// export const logout = () => client.post('/api/auth/logout');