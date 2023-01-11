module.exports = {
  apps: [
    {
      name: 'ins_ssr_lcy',
      script: 'bootstrap.js',
      exec_mode: 'cluster',
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
