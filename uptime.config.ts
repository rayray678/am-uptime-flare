const pageConfig = {
  // Title for your status page
  title: "Ray的监控器",
  // Links shown at the header of your status page, could set highlight to true
  links: [
    { link: 'https://nezha.rayray666.us.kg/', label: '哪吒面板', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format <USERNAME>:<PASSWORD>
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
   
    // Example TCP Monitor
    {
      id: 'nezha',
      name: '哪吒探针',
      // method should be TCP_PING for tcp monitors
      method: 'GET',
      // target should be host:port for tcp monitors
      target: 'https://nezha.rayray666.us.kg/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://nezha.rayray666.us.kg',
      timeout: 10000,
    }, {
      id: 'qinglong',
      name: '青龙面板',
      // method should be TCP_PING for tcp monitors
      method: 'GET',
      // target should be host:port for tcp monitors
      target: 'https://wddsrferf-qinlong1-2.hf.space/crontab',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://wddsrferf-qinlong1-2.hf.space/crontab',
      timeout: 10000,
    },
     id: 'bpb',
      name: 'BPB',
      // method should be TCP_PING for tcp monitors
      method: 'GET',
      // target should be host:port for tcp monitors
      target: 'https://bpb.993474.xyz/',
      tooltip: 'My production server monitor',
      statusPageLink: 'https://bpb.993474.xyz',
      timeout: 10000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
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
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
