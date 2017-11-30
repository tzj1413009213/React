import React from 'react';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import {Icon} from 'antd';

import './personal.scss'
import * as personalAction from './personalAction'
import FooterComponent from '../tinyComponents/FooterComponent'
import baseurl from '../../libs/baseurl';

class personalComponent extends React.Component{
    componentDidMount(){
        $('.footer ul li').eq(3).addClass('iconActive');
        var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'token'){
                        console.log(temp[1])
                        const sql = `select * from user_list where token = '${temp[1]}'`
                        this.props.init(baseurl + 'Datagrid.php',sql).then(res=>{
                        console.log(res[0])
                        $('.phone').text(res[0][0].username)
                        })
                    }
                }.bind(this))
            }
    }
    render(){
        return (
            <div className="box">

                <div className="l-content">
                    <div className="l-head">
                        <div className="l-info">
                            <Icon type="apple" className='apple' />
                            <p>尊敬的用户</p>
                            <span className="phone"></span>
                            <Icon type="qrcode" className='qrcode' />
                        </div>
                    </div>
                    <div className="other">
                        <div className="youhui">
                            <span className='heavy'>0张</span>
                            <span>优惠券</span>
                        </div>
                          <div className="yue">
                            <span className='heavy'>￥0.00</span>
                            <span>余额</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="order">
                        <ul>
                            <li><Link to="/order"><Icon type="check-square"/>我的订单</Link></li>
                            <li><Link to="/address"><Icon type="share-alt" />地址管理</Link></li>
                            <li><Icon type="gift" />优惠券</li>
                            <li><Icon type="wallet" />余额充值</li>
                            <li><Icon type="coffee" />21客会</li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="order type">
                    <ul>
                        <li>用户反馈</li>
                        <li>用户协议</li>
                        <li>版本</li>
                        <li>关于</li>
                    </ul>
                    </div>
                    <div className="line"></div>
                    <div className="tel">
                        <ul>
                            <li>客服电话 400 650 2121</li>
                            <li><Icon type="phone" className="Phone"/></li>
                        </ul>
                    </div>
                    <div className="bigline"></div>
                   <p className="quit" onClick={this.quit}>退出登录</p>
                </div>
                <div className="l-footer">
                <FooterComponent/>
                 </div>
                <div className="l-cover">

                </div>
                <div className="l-massage">
                    <p>21Cake提醒您</p>
                    <p className='massage'>该账号尚未注册</p>
                    <button onClick={this.confirm.bind(this)} className="qx1">确定</button>
                    <button onClick={this.cancel.bind(this)} className="qx2">取消</button>
                </div>
            </div>
        )
    }
    quit(){
        $('.l-cover').show()
        $('.l-massage').show()
        $('.massage').text('确定要退出登录吗')

    }
    cancel(){
        $('.l-cover').hide()
        $('.l-massage').hide()
    }
    confirm(){
        $('.l-cover').hide();
        $('.l-massage').hide();
        console.log(666)
         var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'token'){
                    console.log(temp[1])
                    const sql = `select * from user_list where token = '${temp[1]}'`
                    this.props.Get(baseurl + 'Datagrid.php',sql).then(res=>{
                    console.log(res[0][0].token)
                    // var date=new Date();
                    // date.setTime(date.getTime()-30*60*1000); 
                    // document.cookie="token="+res[0][0].token+"expires="+date.toGMTString();
                    var date = new Date();
                    date.setDate(date.getDate()-7);
                    document.cookie = "token="+res[0][0].token+";expires="+date.toString();
                    location.href = '/#/login'
                    })
                }
            }.bind(this))
        }
    }

}
const mapStateToProps = function(state){
    return {
        data: state.personal.dataset || {}
    }
}

export default connect(mapStateToProps, personalAction)(personalComponent)