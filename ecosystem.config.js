module.exports = {
  apps: [
    {
      name: 'wydwebsite',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      PORT: 3000
    }
  ]
}
