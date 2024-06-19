import { extend } from 'dayjs';

const request = extend({
  // @ts-ignore
  // 默认请求是否带上cookie
  credentials: 'include',
  prefix:
    // process.env.NODE_ENV 记录当前是什么环境
    // 如果当前是 production 生产环境，就去请求地址 http://xxxx，这个地址就是后端生产环境的地址
    process.env.NODE_ENV === 'production' ? 'http://bi.kongshier.top' : 'http://localhost:8801'
});
export default request;
