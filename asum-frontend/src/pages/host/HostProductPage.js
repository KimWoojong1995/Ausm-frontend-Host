import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostProduct from '../../components/host/HostProduct';

function HostProductPage() {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostProduct />
        </HostTemplate>
        </>
    )
}

export default HostProductPage;
