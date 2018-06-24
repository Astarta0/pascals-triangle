import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Triangle from "./Triangle.js";

const App = styled.div`
    display: flex;
    padding: 24px;
`;

ReactDOM.render(
    <App>
        <Triangle />
    </App>,
    document.getElementById("root")
);
