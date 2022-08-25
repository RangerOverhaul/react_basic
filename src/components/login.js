import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Main from '../Layouts/main'
import { create } from '../context/axiosContext'


function componente(props) {
    create("Danilo", "Developer")
      .then((response) => {
        console.log("Result create", response?.data);
      })
      .catch((e) => {
        console.log("Error create", { ...e });
      });
    const {
        email,
        password,
        onChangeCampo,
        onLogin,
    } = props;
    return (
        <Main>
            <form className="row">
                <div className="col-md-3">
            <TextField label="email" value={email}
                onChange = { e => onChangeCampo('email', e.target.value) }
            ></TextField>
            </div>
            <br></br>
            <div className="col-md-3">
            <TextField label="password" value= {password}
                onChange = { e => onChangeCampo('password', e.target.value) }
            ></TextField>
            </div>
            <br></br>
            <br></br>
            <div className="col-md-2">
                <br></br>
            <Button
                variant="contained"
                color="primary"
                
                onClick = {onLogin}

            >login</Button>
            </div>
            </form>
            <div className="col-md-8">
            <h6>nota: </h6>
            <p> 
                estos datos no seran los usados para el registro en api reqres.in, 
                vea la consola para mas informacion</p>
            </div>
        </Main>

    );
    
}
export default componente;



