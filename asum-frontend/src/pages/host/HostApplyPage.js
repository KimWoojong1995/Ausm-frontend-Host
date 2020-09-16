import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostApplyContainer from '../../containers/host/HostApplyContainer';


function HostRegisterPage() {
    return (
    <>
    <HeaderContainer />
    <HostTemplate>
        <HostApplyContainer />
    </HostTemplate>
    </>
    )
}

export default HostRegisterPage;