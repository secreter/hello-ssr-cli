
import style from './index.less';

import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import IoMsg from './components/IoMsg';
import {Input,Row,Col} from 'antd';

class Home extends React.Component {
    state={
        localPath: '',
    }
    render() {
        return (
            <div className={style['home']}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        目录名称：
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Input onChange={this.handleChange}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    </Col>
                </Row>
                <IoMsg></IoMsg>
            </div>
        );
    }
    handleChange=(e)=>{
        this.setState({
            localPath: e.target.value
        });
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
