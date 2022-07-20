import { render, screen } from '@testing-library/react';
import {UserTable} from "./UserTable";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store'
import App from "../../App";
import {Table} from "../../styles/component";



describe("testing table component", () => {
    const initialState = {}
    const mockStore = configureStore()
    let store
    test("renders learn react link", () => {
        store = mockStore(initialState)
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(getByText("Registration")).not.toBeNull()
    });

    test("Is Table in document", () => {
        render(<Table/>)
        const headerTable = screen.getByRole("table")
        expect(headerTable).toBeInTheDocument()
    })
})

