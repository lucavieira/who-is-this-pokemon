import styled from 'styled-components'

const Container = styled.div`
    max-width: 900px;
    width: 90%;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &.result {
        width: 300px;
        margin: 20px 0;
        border-radius: 5px;

        font-size: 18px;
        font-weight: bold;
    }

    &.congrats {
        background-color: #00BA2E;
    }

    &.sorry {
        background-color: #C70000;
    }
`

export default Container