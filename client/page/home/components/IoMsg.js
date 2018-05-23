/**
 * Created by pengchaoyang on 2018/5/22
 */
import io from 'socket.io-client';
import React from 'react';
import { connect } from 'react-redux';
import style from './IoMsg.less';
const socket = io('http://localhost:3002');

class IoMsg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: ''
        };
        this.initSocket();
    }

    render(){
        const {time}=this.state;
        return (
            <div className={''}>
                {time}
            </div>
        );
    }

    initSocket=()=>{
        socket.on('news',(data) =>{
            console.log(data);
            socket.emit('my other event',{ my: 'data' });
        });
        socket.on('time',(data) =>{
            this.setState({
                time: data.time
            });
        });
    }
}


export default connect()(IoMsg);
