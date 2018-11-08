import React from 'react';
import { connect } from 'dva';
@connect(({count})=>({ct:count.ct}))//从state里解构出count.ct赋值给ct后传给this.props后再解构出ct显示在页面
export default class  Products extends React.Component{

  addClick = (value)=> {
    const { dispatch} = this.props;
    dispatch({type: 'count/addCount',payload:{stepNum:5}})
  };

  minusClick = (value)=> {
    const { dispatch} = this.props;
    dispatch({type: 'count/delCount',payload:{stepNum:2}})
  };

  render(){
    const {ct} = this.props;
    return(
      <div>
        <h2>{ ct }</h2>
        <button  onClick={this.minusClick}>-</button>
        <button  onClick={this.addClick}>+</button>
      </div>
    );
  }
}
/*function mapStateToProps(state) {
  return {ct:state.count.ct}
}*/
//export default connect(mapStateToProps)(Products)
