
export default {

  //model 的命名空间，同时也是他在全局 state 上的属性，
  // 只能用字符串，不支持通过.的方式创建多层命名空间
  namespace: 'example',

  //reducer的初始值，优先级低于传给dva()的 opts.initialState
  state: {},

  //Subscriptions 是一种从 源 获取数据的方法
  //Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
  //数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save'});
    },
  },

  //以 key/value 格式定义reducer，用于处理同步操作，
  // 唯一可以修改 state 的地方，由 action 触发
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
