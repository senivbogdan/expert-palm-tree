import {Provider} from 'react-redux'

export const renderWithRedux = (component, store) => {
    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}