import DropdownSubitem from "../dropdownSubitem/DropdownSubitem";
import './DropdownItem.css';

const DropdownItem = (props) => {
    //console.log(props);
    return (
        <div className="DropdownItem">
            <div className="DropdownChoice">
                <h3>{props.name}</h3>
            </div>
            <div className="DropdownHidden">
                {props.actions.map((prop, id) => {
                    return <DropdownSubitem key={id} {...prop}/>
                })}
            </div>
        </div>
    );
};

export default DropdownItem;