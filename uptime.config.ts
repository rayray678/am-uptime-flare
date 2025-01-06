const pageConfig = {
  // 状态页面的标题
  title: "Ray的监控器",
  // 显示在状态页面标题的链接，可以设置 highlight 为 true
  links: [
    { link: 'https://nezha.rayray666.us.kg/', label: '哪吒面板', highlight: true },
  ],
};

const workerConfig = {
  // 除非状态发生变化，否则最多每 3 分钟写入一次 KV
  kvWriteCooldownMinutes: 3,
  // 通过取消注释下面一行来为状态页面和 API 启用 HTTP 基本身份验证，格式为 <USERNAME>:<PASSWORD>
  // passwordProtection: 'username:password',
  // 在此处定义所有监控器
  monitors: [
    // TCP 监控器示例
    {
      id: 'nezha',
      name: '哪吒探针',
      // 对于 tcp 监控器，method 应该是 TCP_PING
      method: 'GET',
      // 对于 tcp 监控器，target 应该是 host:port
      target: 'https://nezha.rayray666.us.kg/',
      tooltip: '我的生产服务器监控器',
      statusPageLink: 'https://nezha.rayray666.us.kg',
      timeout: 10000,
    },
    {
      id: 'qinglong',
      name: '青龙面板',
      // 对于 tcp 监控器，method 应该是 TCP_PING
      method: 'GET',
      // 对于 tcp 监控器，target 应该是 host:port
      target: 'https://wddsrferf-qinlong1-2.hf.space/crontab',
      tooltip: '我的生产服务器监控器',
      statusPageLink: 'https://wddsrferf-qinlong1-2.hf.space/crontab',
      timeout: 10000,
    },
    { // 注意这里，原本缺少了对象的大括号 {}
      id: 'bpb',
      name: 'BPB',
      // 对于 tcp 监控器，method 应该是 TCP_PING
      method: 'GET',
      // 对于 tcp 监控器，target 应该是 host:port
      target: 'https://bpb.993474.xyz/',
      tooltip: '我的生产服务器监控器',
      statusPageLink: 'https://bpb.993474.xyz/',
      timeout: 10000,
    },
  ],
  notification: {
    // [可选] Apprise API 服务器 URL
    // 如果未指定，则不会发送通知
    appriseApiServer: "https://apprise.example.com/notify",
    // [可选] Apprise 的接收者 URL，请参阅 https://github.com/caronc/apprise
    // 如果未指定，则不会发送通知
    recipientUrl: "tgram://bottoken/ChatID",
    // [可选] 通知消息中使用的时区，默认为 "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [可选] 发送通知前的宽限期（分钟）
    // 只有在初始故障后，监控器连续 N 次检查都处于关闭状态时，才会发送通知
    // 如果未指定，则会立即发送通知
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 当任何监控器的状态发生变化时，将调用此回调
      // 在此处编写任何 Typescript 代码

      // 这不会遵循宽限期设置，并且会在状态更改时立即调用
      // 如果要实现宽限期，则需要手动处理
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 如果任何监控器存在持续事件，则每 1 分钟调用一次此回调
      // 在此处编写任何 Typescript 代码
    },
  },
};

// 不要忘记这一点，否则编译会失败。
export { pageConfig, workerConfig };
