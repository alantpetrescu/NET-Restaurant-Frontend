import Dropdown from "../dropdown/Dropdown";
import SidebarHeader from "../sidebarHeader/SidebarHeader";

const Sidebar = ({username, services, setInputs}) => {
    return (
        <div className="Sidebar">
            <SidebarHeader username={username}/>
            <Dropdown services={services} setInputs={setInputs}/>
        </div>
    );
};

export default Sidebar;