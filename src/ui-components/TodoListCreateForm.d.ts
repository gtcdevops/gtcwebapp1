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
export declare type TodoListCreateFormInputValues = {
    name?: string;
};
export declare type TodoListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoListCreateFormOverridesProps = {
    TodoListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoListCreateFormProps = React.PropsWithChildren<{
    overrides?: TodoListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodoListCreateFormInputValues) => TodoListCreateFormInputValues;
    onSuccess?: (fields: TodoListCreateFormInputValues) => void;
    onError?: (fields: TodoListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoListCreateFormInputValues) => TodoListCreateFormInputValues;
    onValidate?: TodoListCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodoListCreateForm(props: TodoListCreateFormProps): React.ReactElement;
