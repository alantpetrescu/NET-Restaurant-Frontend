import { InputField } from "../inputField/InputField";
import './InputList.css';

export const InputList = ({inputs}) => {
    console.log("inputs: " + inputs.length);
    return (
        <div className="InputList">
            {inputs.map((inputField) => <InputField key={inputField.id} inputField={inputField.data}/>)}
        </div>
    )
};