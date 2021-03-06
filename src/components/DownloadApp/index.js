import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'antd';

import './self.less';
function DownloadApp(){
    return (
        <Card style={{ width: '100%',marginTop:'20px' }} hoverable='true' className="download-card" bodyStyle={{padding:'15px'}}>
            <NavLink to='/app'>
                <img alt='qrcode' src='//b-gold-cdn.xitu.io/v3/static/img/timeline.e011f09.png' />
                <div>
                    <div className="headline">下载掘金客户端</div>
                    <div className="desc">一个帮助开发者成长的社区</div>
                </div>
            </NavLink>
        </Card>
    )
}

export default DownloadApp;