
interface ToggleControl{
    isToggled:boolean;
    onToggle:Function;
}
function ToggleBox({isToggled, onToggle}:ToggleControl){
    return(
        <label className="switch">
        <input type='checkbox' checked={isToggled} onChange={()=>onToggle()}></input>
        <span className="slider"></span>
        </label> 
    );

}
export default ToggleBox;