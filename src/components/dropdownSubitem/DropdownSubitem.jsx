import './DropdownSubitem.css';

const DropdownSubitem = ({ name, method, url, params}) => {
    return (
        <div className="DropdownSubitem">
            <h3>{name}</h3>
        </div>
    )
};

export default DropdownSubitem;