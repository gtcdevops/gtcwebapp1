/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoListUpdateFormInputValues = {
    name?: string;
};
export declare type TodoListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoListUpdateFormOverridesProps = {
    TodoListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoListUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todoList?: any;
    onSubmit?: (fields: TodoListUpdateFormInputValues) => TodoListUpdateFormInputValues;
    onSuccess?: (fields: TodoListUpdateFormInputValues) => void;
    onError?: (fields: TodoListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoListUpdateFormInputValues) => TodoListUpdateFormInputValues;
    onValidate?: TodoListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoListUpdateForm(props: TodoListUpdateFormProps): React.ReactElement;
