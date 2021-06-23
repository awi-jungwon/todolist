import * as React from 'react';
import ITestData3, { ITestData, ITestData2 } from '../../models/ITestData'
type enumType = 'enum1' | 'enum2' | 'enum3';
interface IProps {
    displayName: number | enumType;
    onClickMeButtonClick: () => void;
}


interface IState {
    test1: string;
    test2: number;
    test3?: [];
    test4: boolean;
    test5: number | enumType;
}

const initState:IState = {
    test1: "",
    test2: 1233,

    test4: true,
    test5: 12
}

class TestComponent extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({...initState, test5: this.props.displayName});
    }

    render() {
        return (
        <>
            <div onClick={(event:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{ console.log('test component clicked...')}}>Click me!</div>
        </>);
    }
}

export default TestComponent;
