import DropdownItem from "../dropdownItem/DropdownItem";
import "./Dropdown.css";

const Dropdown = ({ services }) => {
    return (
        <div className="Dropdown">
            {services.map((service, id) => {
                return <DropdownItem key={id} {...service} />
            })}
        </div>
    )
};

export default Dropdown;