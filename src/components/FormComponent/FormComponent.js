import React from "react";
import {Div, FildsDiv, FooterDiv, Form} from "../../styles/component";
import {MyInput} from "../MyInput/MyInput";
import {MyAddressInput} from "../AddressInput/AddressInput";
import {MySelect} from "../MySelect/MySelect";
import {ConfirmDataUsage} from "../ConfirmData/ConfirmDataUsage";
import ButtonRegister from "../Buttons/ButtonRegister";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {ADD_USER} from "../../store/constanst/constants";

const FormComponent = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch({
            type: ADD_USER,
            payload: data
        })
        reset()
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Div>
                <FildsDiv>
                    <MyInput
                        register={register}
                        errors={errors}
                        label={"First Name"}
                        validaton={{
                            required: "The field is required!!!",
                            maxLength: 80,
                            pattern: /^[a-zA-Z]+$/i
                        }}
                    />
                    <MyInput
                        register={register}
                        errors={errors}
                        label={"Last name"}
                        validaton={{
                            required: "The field is required!!!",
                            maxLength: 80,
                            pattern: /^[a-zA-Z]+$/i
                        }}
                    />
                    <MyInput
                        register={register}
                        errors={errors}
                        label={"Number"}
                        validaton={{required: "The field is required!!!", minLength: 6, maxLength: 12, pattern: /^[0-9]+$/i}}
                    />
                </FildsDiv>
                <FildsDiv>
                    <MyAddressInput
                        register={register}
                        errors={errors}
                        label={"Address"}
                        validaton={{required: "The field is required!!!"}}
                    />
                    <MyInput
                        register={register}
                        errors={errors}
                        label={"Email"}
                        validaton={{required: "The field is required!!!", pattern: /^\S+@\S+$/i}}
                    />
                    <MySelect
                        register={register}
                    />
                </FildsDiv>
            </Div>
            <FooterDiv>
                <ConfirmDataUsage
                    register={register}
                    errors={errors}
                    label={"Confirm data usage"}
                    validaton={{required: "The field is required!!!"}}
                />
                <ButtonRegister/>
            </FooterDiv>
        </Form>
    );
};

export default FormComponent;