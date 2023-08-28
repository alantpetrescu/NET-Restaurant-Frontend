import './DropdownSubitem.css';

const DropdownSubitem = ({ name, method, url, bodyProperties, params, setInputs}) => {
    const onClick = (e) => {
        console.log(bodyProperties)
        const inputProperties = bodyProperties.concat(params);
        const inputFields = inputProperties.map((input, id) => ({
            id,
            data: {
                name: input[0],
                type: ((input[1] === "string" || input[1] === "string?" || input[1] === "Guid") ? "text" : "number"),
                placeholder: input[0]
            },
        }));
        console.log(inputFields)
        setInputs(inputFields);
    }

    return (
        <div className="DropdownSubitem" onClick={onClick}>
            <h3>{name}</h3>
        </div>
    )
};

export default DropdownSubitem;