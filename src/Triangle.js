import React, { PureComponent } from "react";
import styled from "styled-components";

const levels = 3;

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(7, 1fr) 2fr;
`;

const Cell = styled.div`
    grid-area: ${p => p.level};
    grid-column: ${p => [
        p.first ? 1 : p.index,
        p.last ? 9 : p.index + 1
    ].join(' / ')};
    border: 1px blue solid;
`;

export default class Triangle extends PureComponent {
    render() {
        return (
            <Container>
                <Cell level={1} index={1} first last>1</Cell>

                <Cell level={2} index={1} first>1</Cell>
                <Cell level={2} index={2} last>1</Cell>

                <Cell level={3} index={1} first>1</Cell>
                <Cell level={3} index={2}>2</Cell>
                <Cell level={3} index={3} last>1</Cell>

                <Cell level={4} index={1} first>1</Cell>
                <Cell level={4} index={2}>3</Cell>
                <Cell level={4} index={3}>3</Cell>
                <Cell level={4} index={4} last>1</Cell>

                <Cell level={5} index={1} first>1</Cell>
                <Cell level={5} index={2}>4</Cell>
                <Cell level={5} index={3}>6</Cell>
                <Cell level={5} index={4}>4</Cell>
                <Cell level={5} index={5} last>1</Cell>
            </Container>
        );
    }
}
