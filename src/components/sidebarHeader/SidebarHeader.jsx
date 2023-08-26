import "./SidebarHeader.css";

const SidebarHeader = ({username}) => {
    return (
        <h3 className="Username">{username}</h3>
    );
};

export default SidebarHeader;