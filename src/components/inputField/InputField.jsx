import "./InputField.css";

export const InputField = ({ inputField }) => {
    console.log("Input Field: " + inputField);
    return (
        <div className="InputField">
            <span>{inputField.name}</span>
            <input type={inputField.type} placeholder={inputField.placeholder}/>
        </div>
    )
};