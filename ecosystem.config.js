module.exports = {
  apps: [
    {
      name: 'node-firebase',
      script: './server/index.js',
      watch: true,
      watch_delay: 500,
      ignore_watch: ['node_modules', 'client'],
      watch_options: {
        persistent: true,
        follow_symlinks: true
      },
      usePolling: true,
      exec_interpreter: 'babel-node',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
