import DropdownItem from "../dropdownItem/DropdownItem";

const Dropdown = ({ services }) => {
    return (
        <div>
            {services.map((service, id) => {
                return <DropdownItem key={id} {...service} />
            })}
        </div>
    )
};

export default Dropdown;