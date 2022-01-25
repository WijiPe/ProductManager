import Form from '../components/Form';
import Display from '../components/Display';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Main = () => {

    const [refresh, setRefresh] = useState(false)

    const reloadList = ()=>{
        setRefresh(!refresh)
    }
    return (
        <div>
            <Form reloadList ={reloadList}/>
            <Display refresh={refresh} reloadList ={reloadList}/>
        </div>
    )
}

export default Main;

