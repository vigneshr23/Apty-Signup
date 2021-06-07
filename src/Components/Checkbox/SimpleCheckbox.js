import { useField } from "formik";
import { useState } from "react";

export const SimpleCheckbox = (props) => {

    const [field, meta] = useField(props)

    return (
        <div className="term-checkbox">
            <input type="checkbox" {...props} {...field} />
            <label htmlFor={props.id}>
                <span className={`term-checkbox__custom-checkbox${field.value ? '--checked' : ''}`}></span>
                <span className="term-checkbox__label" dangerouslySetInnerHTML={{ __html: props.labelText }}></span>
            </label>
        </div>
    )
}