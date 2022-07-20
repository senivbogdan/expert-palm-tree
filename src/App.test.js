import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {renderWithRedux} from "./helpers/renderWithRedux";

describe("Test App component", () => {
    const initialState = {}
    const mockStore = configureStore()
    let store
    test("renders learn react link", () => {
        store = mockStore(initialState)
        const { getByText } = render(renderWithRedux(<App/>, store))

        expect(getByText("Registration")).not.toBeNull()
    });
})
