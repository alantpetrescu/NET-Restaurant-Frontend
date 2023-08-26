import DropdownSubitem from "../dropdownSubitem/DropdownSubitem";

const DropdownItem = (props) => {
    console.log(props);
    return (
        <div className="DropdownItem">
            <h3>{props.name}</h3>
            <div className="DropdownHidden">
                {props.actions.map((prop, id) => {
                    return <DropdownSubitem key={id} {...prop}/>
                })}
            </div>
        </div>
    );
};

export default DropdownItem;