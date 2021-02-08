import React from "react";

import styled from "styled-components";

const HeaderElm = styled.div`
    display: flex;
`;
const Title = styled.h1`
    font-weight: bold;
    font-size: 100px;
    color: rgba(175, 47, 47, 0.15);
`;
const Header = () => {
    return (
        <HeaderElm>
            <Title className="title">todos</Title>
        </HeaderElm>
    );
};

export default Header;
