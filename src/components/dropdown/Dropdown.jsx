import DropdownItem from "../dropdownItem/DropdownItem";
import "./Dropdown.css";

const Dropdown = ({ services, setInputs }) => {
    return (
        <div className="Dropdown">
            {services.map(service => {
                return <DropdownItem key={service.id} name={service.name} actions={service.actions} setInputs={setInputs}/>
            })}
        </div>
    )
};

export default Dropdown;