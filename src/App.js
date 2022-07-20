import React from "react";
import {
    AppDiv,
    WrapperDiv,
    Header,
} from "./styles/component"
import {UserTable} from "./components/UsersTable/UserTable";
import GlobalStyles  from "./styles/global";
import FormComponent from "./components/FormComponent/FormComponent";

const App = () => {
    return (
        <AppDiv className="App">
            <WrapperDiv>
                <Header>Registration</Header>
                <FormComponent/>
            </WrapperDiv>
            <UserTable/>
            <GlobalStyles/>
        </AppDiv>
    );
}

export default App;
