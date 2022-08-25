import React from 'react'
import Main from '../Layouts/main'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Formulario(props) {
    const {
        nombre,
        telefono,
        nickname,
        onChangeCampo,
        onForm,
    } = props;
    return (
        <Main>
           
            <form className="row">
                <h6> Formulario </h6>
                <div className="col-md-3" >
                    <TextField label="correo" value= {nombre}
                        onChange = { e => onChangeCampo('nombre', e.target.value) }
                    ></TextField>
                 <br></br>
                </div>
                <div className="col-md-3" >
                <TextField label="telefono" value= {telefono}
                        onChange = { e => onChangeCampo('telefono', e.target.value) }
                    ></TextField>
                </div>
                <div className="col-md-3" >
                <TextField label="contraseña" value= {nickname}
                        onChange = { e => onChangeCampo('nickname', e.target.value) }
                    ></TextField>
                </div>
                <div className="col-md-3">
                    <Button
                    variant="contained"
                    color="primary"
                    onClick = {onForm}
                    >enviar</Button>
                </div>

            </form>

        </Main>

    );
    
}
export default Formulario;
