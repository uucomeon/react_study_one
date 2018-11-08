/**
 * Created by guangqiang on 2017/12/16.
 */

export default {
  namespace: 'count',

  state: {
    ct:10
  },

  effects: {
    *addCount({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'add',stn:payload.stepNum});
    },
    *delCount({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'minus',stn:payload.stepNum});
    },
  },

  //只有在这里能修改state状态
  reducers: {
    add(state,{stn}) {
      state.ct += stn;
      return {...state};
    },
    minus(state,{stn}) {
      state.ct -= stn;
      return {...state};
    }
  }
}
