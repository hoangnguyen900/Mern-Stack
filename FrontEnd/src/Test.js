import React from 'react';

import axios from 'axios'
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:-1,
            email:'',
            pass:''
         }
    }
    componentDidMount(){
        this.axiosAPI();
    }
    axiosAPI=()=>{
        axios({
            method: "get",
            url: 'http://localhost:3000/todo/',
            headers: { 
                'content-type': 'application/json' 
            },
          })
            .then(res => {     
                console.log('res',res)
                this.setState({
                    id:res.data.data[0].id,
                    email:res.data.data[0].email,
                    pass:res.data.data[0].pass

                })
              })           
            .catch(er => {
                console.log('err',er)
            });
            
    }
    render() { 
        let {id,email,pass}=this.state
        return ( 
            <div >hello {id} {email} {pass}</div>
         );
    }
}
 
export default Test;