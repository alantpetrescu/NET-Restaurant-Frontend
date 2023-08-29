import Dropdown from "../dropdown/Dropdown";
import SidebarHeader from "../sidebarHeader/SidebarHeader";

const Sidebar = ({username, services, setBodyInputs, setParamInputs, setBodyInputsData, setParamInputsData, setMethod, setUrl}) => {
    return (
        <div className="Sidebar">
            <SidebarHeader username={username}/>
            <Dropdown 
                services={services} 
                setBodyInputs={setBodyInputs} 
                setParamInputs={setParamInputs}
                setBodyInputsData={setBodyInputsData}
                setParamInputsData={setParamInputsData}
                setMethod={setMethod} 
                setUrl={setUrl} 
            />
        </div>
    );
};

export default Sidebar;