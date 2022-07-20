import React from "react";
import {FieldDiv, Select, Option} from "../../styles/component"


export const MySelect = ({register}) => {
    return (
        <>
            <FieldDiv>
                Gender:
                <Select
                    {...register("Gender",
                        {required: true})}
                >
                    <Option value="Men">Men</Option>
                    <Option value="Female">Female</Option>
                </Select>
            </FieldDiv>
        </>
    );
};

