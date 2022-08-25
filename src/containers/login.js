import React from 'react';
import Pagina from '../components/login';
import axios from 'axios';


class Contenedor extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        };
        this.onChangeCampo = this.onChangeCampo.bind(this);
       
    }
    
    onChangeCampo(campo, value){
        this.setState({ [campo]: value  })
    }
    
    onLogin= () =>{
        console.log(' DATA DEFAULT REGISTER REQRES.IN')
        axios.post('https://reqres.in/api/register', {
            email:'eve.holt@reqres.in',
            password: 'pistol'
        }).then(response =>{
            console.log(response);
        });
        
    }

    render(){
        const{ email, password} = this.props
        return(
            <Pagina 
            email = {email}
            password = {password}
            onChangeCampo = {this.onChangeCampo}
            onLogin = {this.onLogin}

            ></Pagina>
        );

    }
}

export default Contenedor