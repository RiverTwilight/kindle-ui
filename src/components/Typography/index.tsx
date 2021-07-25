import styled, { css } from "styled-components";
import React from "react";

const Typography = styled.article`
    padding: 15px;
    max-width: 1000px;
`;

export default ({ children }: any) => {
    return <Typography>{children}</Typography>;
};
