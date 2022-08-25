import React from 'react'
import Pagina from '../components/formulario'
class Formulario extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            nombre:'',
            telefono:'',
            nickname:''
        };
        this.onChangeCampo = this.onChangeCampo.bind(this);
        this.onForm = this.onForm.bind(this);
    }
    
    onChangeCampo(campo, value){
        this.setState({ [campo]: value  })
    }
    onForm = ()=>{
        console.log('onForm', this.state)
    }

    render(){
        const{ nombre, telefono, nickname} = this.props
        return(
            <Pagina 
            nombre = {nombre}
            telefono = {telefono}
            nickname = {nickname}
            onChangeCampo = {this.onChangeCampo}
            onForm = {this.onForm}

            ></Pagina>
        );

    }
}

export default Formulario