const fetch = require('node-fetch'); // 使用 CommonJS 语法

const pageConfig = {
  title: "Ray的监控器",
  links: [
    { link: 'https://nezha.rayray666.us.kg/', label: '哪吒面板', highlight: true },
  ],
};

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'nezha',
      name: '哪吒探针',
      method: 'GET',
      target: 'https://nezha.rayray666.us.kg/',
      tooltip: 'My production server monitor',
      timeout: 10000,
    }, {
      id: 'qinglong',
      name: '青龙面板',
      method: 'GET',
      target: 'https://wddsrferf-qinlong1-2.hf.space',
      tooltip: 'My production server monitor',
      timeout: 10000,
    },
  ],
  notification: {
    onStatusChange: async (env, monitor, isUp, timeIncidentStart, timeNow, reason) => {
      try {
        const botToken = "7883310071:AAEJBj2FC43GIKkb6IvR600rC03wVFGSiAo";
        const chatId = "7930266661"; 
        const tgMessage = isUp
          ? `✅ 服务器 ${monitor.name} 已恢复！\n时间: ${new Date(timeNow).toLocaleString()}`
          : `❌ 服务器 ${monitor.name} 掉线！\n原因: ${reason}\n时间: ${new Date(timeIncidentStart).toLocaleString()}`;
        const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        await fetch(tgUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: tgMessage,
          }),
        });

        const pushPlusToken = "7f728b815761451191e3cecd824c8027"; 
        const pushPlusTitle = isUp
          ? `✅ 服务器恢复：${monitor.name}`
          : `❌ 服务器掉线：${monitor.name}`;
        const pushPlusContent = isUp
          ? `服务器 ${monitor.name} 已恢复！\n时间: ${new Date(timeNow).toLocaleString()}`
          : `服务器 ${monitor.name} 掉线！\n原因: ${reason}\n时间: ${new Date(timeIncidentStart).toLocaleString()}`;
        const pushPlusUrl = "http://www.pushplus.plus/send";
        await fetch(pushPlusUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: pushPlusToken,
            title: pushPlusTitle,
            content: pushPlusContent,
            template: "json",
          }),
        });
      } catch (error) {
        console.error("Error sending notifications:", error);
      }
    },
  },
  callbacks: {
    onStatusChange: async () => {},
    onIncident: async () => {},
  },
};

export { pageConfig, workerConfig };
