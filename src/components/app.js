import React from 'react'
import Main from '../Layouts/main'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';

function App(props) {
    const {
        users,
        nombre,
        textinfo,
    } = props;

    return (
        <Main>
            <div className="container mt-5">
                <h1>  <strong> By Danilo Herazo </strong> </h1>
                
                <Typography> 
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In placerat luctus diam eget volutpat. Sed nec mi tincidunt
                    lectus aliquet imperdiet. Donec aliquet lectus sed volutpat
                    vestibulum. Duis sit amet urna urna. Mauris lobortis nibh 
                    id vehicula ultricies. Aenean vitae sagittis ipsum. Etiam 
                    aliquam, augue sit amet fermentum commodo, purus dolor rutrum 
                    nulla, id feugiat ipsum lacus non purus. Nunc dictum mauris
                    dapibus luctus viverra. Mauris bibendum, justo sed mattis 
                    sodales, orci mauris scelerisque massa, et vulputate ex velit 
                    id enim. Maecenas tortor dolor, aliquam et convallis auctor, 
                    fermentum a enim. Aenean tincidunt porta odio, vel varius mi 
                    tristique eu. 
                    
                </Typography>
                <br></br>
                <div>
                  <h3> { textinfo } </h3>
                </div>
                
                <br></br>

            </div>
            

        </Main>
    )
    
}

export default App