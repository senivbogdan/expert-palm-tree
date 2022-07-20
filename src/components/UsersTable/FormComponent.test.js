import {act, fireEvent, render} from "@testing-library/react";
import {screen, waitFor} from '@testing-library/dom'
import FormComponent from "../FormComponent/FormComponent";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import App from "../../App";

describe("", () => {
        const initialState = {}
        const mockStore = configureStore()
        let store
        test("renders learn react link", () => {
            store = mockStore(initialState)
            const {getByText} = render(
                <Provider store={store}>
                    <App>
                        <FormComponent/>
                    </App>
                </Provider>
            )
        });
        test("call onSubmit function", async () => {
            store = mockStore(initialState)
            const mockOnSubmit = jest.fn()
            const {queryByTestId, getByRole} = render(
                <Provider store={store}>
                    <FormComponent onSubmit={mockOnSubmit}/>
                </Provider>
            )

            await act(async () => {
                fireEvent.change(queryByTestId("First Name"), {target: {value: "Bogdan"}})
            })
            await act(async () => {
                fireEvent.change(queryByTestId("Second name"), {target: {value: "Seniv"}})
            })
            await act(async () => {
                fireEvent.change(queryByTestId("Number"), {target: {value: "123222"}})
            })
            await act(async () => {
                fireEvent.change(queryByTestId("Email"), {target: {value: "Not@gmail.com"}})
            })
            await act(async () => {
                fireEvent.click(getByRole("button"))
            })
            const elem = screen.queryByTestId("custom-element")
            waitFor(() => {
                expect(mockOnSubmit).toHaveBeenCalledTimes(1)
                expect(mockOnSubmit).toHaveBeenCalled()
                expect(elem).toBeInTheDocument()
            })
        });
    }
)