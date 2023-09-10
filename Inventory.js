import { Component } from "react";
import "./Inventorysystem.css";
import {Menuitems} from "./Menuitems";
//import {Link} from "react-router-dom";
class Inventory extends Component{
    state= {clicked:false};
    handleClick =() => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <inv className="InventoryItems">
                <h1 className="Inventory-logo">Inventory</h1>

                <div className="menu-icons"  onClick={ this.handleClick}> 
                <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>

                <ul className= {
                    this.state.clicked ? "Inv-menu active" : "Inv-menu"} >
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}>
                               <a className={item.cName} href="/">
                            <i className={item.icon}></i>
                            {item.title}
                            </a>
                    </li>

                        )
                    })}
                    <button> Profile </button>
                    
                </ul>
            </inv>
        )
    }

}
export default Inventory;