import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 1px solid #CCC;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    align-items: center;

    .image {
        margin-right: 5px;
        cursor: pointer;
    };

    input {
        border: 0;
        background: transparent;
        outline: 0;
        color: white;
        font-size: 18px;
        flex: 1;
    };
`;