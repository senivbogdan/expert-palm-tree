import React from "react";
import { Table, Caption, Tr, Th, Tbody, } from "../../styles/component";
import { useSelector } from "react-redux";
import {getUser} from "../../store/reducer/selectors/getUser/getUser";

export const UserTable = () => {
    const selector = useSelector(getUser)
    const keys = []
    const values = []
    if (selector) {
        for (const [key, value] of Object.entries(selector)) {
            keys.push(key)
            values.push(value)
            
        }
            delete keys[keys.length - 1]
            delete values[values.length - 1]
    }
    return (
        <Table data-testid="Table">
            {selector && 
            <Caption>Информация о пользователе</Caption>}
            <Tbody>
                <Tr>
                    {keys && keys.map(i => <Th key={i}>{i}</Th>)}
                </Tr>
                <Tr>
                    {values && values.map(i => <Th key={i}>{i}</Th>)}
                </Tr>
            </Tbody>
        </Table>
    )
};