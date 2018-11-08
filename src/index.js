import dva from 'dva';
import './index.css';

// 1. Initialize 创建应用，返回 dva 实例(注：dva 支持多实例)
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/counter').default);
app.model(require('./models/todoList').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
