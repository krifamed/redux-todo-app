import styled from 'styled-components';

const ToggleAll = ({isAllCompleted, onCompleteAll})=> {
    return(

        <ToggleAllWrapper>
            <ToggleAllElm
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    checked={isAllCompleted}
                    readOnly
                    />
                <ToggleAllLabel
                    htmlFor="toggle-all"
                    onClick={onCompleteAll}
                    />
        </ToggleAllWrapper>

    ); 
}


const ToggleAllWrapper = styled.div`
`;

const ToggleAllElm = styled.input`
    width: 1px;
    height: 1px;
    border: none;
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;

    &:checked + label:before {
        color: #737373;
    }
`;

const ToggleAllLabel = styled.label`
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -55px;
    left: -10px;
    transform: rotate(90deg);

    &:before {
        content: "❯";
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }
`;


export default ToggleAll;