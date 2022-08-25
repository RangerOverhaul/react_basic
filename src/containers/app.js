import { Container } from '@material-ui/core';
import React, { Fragment } from 'react';
import { InferencePriority } from 'typescript';
import Pagina from '../components/app'
import {AppContext} from '../context/appContext';



class Presentacion extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           
            nombre: 'Hola mundo',
            
        };
        
    }
   
    render(){
        const { textinfo } = this.context
        const {  users , nombre  } = this.props
        return(
            <Fragment>
                
            <Pagina
                users = {users}
                nombre = { nombre }
                textinfo = { textinfo }
            ></Pagina>
                
            </Fragment>
        );

    }
}

Presentacion.contextType = AppContext
export default Presentacion