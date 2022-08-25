import React, { Children } from 'react';


export const AppContext = React.createContext({
    textinfo: 'Default context from appContext',
    
});


export class AppContextProvaider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textinfo: ' LSV CAR 3 REACT AVANZADO '
        };
    }
    
    render(){
        const {
            textinfo,
        } = this.state;
        return(
            <AppContext.Provider value={{
                textinfo,
            }}
            >
                
            </AppContext.Provider>
        );
    }
}

export const AppContextConsumer = AppContext.Consumer;