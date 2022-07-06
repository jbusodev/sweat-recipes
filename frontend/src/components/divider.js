import React from "react";
import styled from "styled-components";

/* Divider */
const DividerWrapper = styled.span`
    display: inline-block;
    width: ${props => (props.fullwidth ? "100%" : "130px")};
    max-width: ${props => (props.length ? props.length : "")};
    height: ${props => (props.depth ? props.depth : "5px")};
    background-color: ${props => (props.variant ? "#212529" : "#e2e6ea")};
    margin-bottom: ${props => (props.mbottom ? props.mbottom : "20px")};
    transform: ${props => (props.vertical ? `rotate(90deg)` : "")};
`;

export const Divider = ({
    vertical,
    fullwidth,
    length,
    depth,
    variant,
    mbottom,
}) => {
    return (
        <DividerWrapper
            vertical={vertical}
            fullwidth={fullwidth}
            length={length}
            depth={depth}
            variant={variant}
            mbottom={mbottom}
        />
    );
};
