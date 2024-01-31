#!/bin/bash
set -e

# Start NGINX
nginx -g "daemon off;" &

# Start other services or commands if needed
sudo su root -c "service cron start && (echo \"*/5 * * * * /usr/sbin/logrotate /etc/logrotate.d/logrotate.conf\") | crontab -" 2>&1

# Check if the first argument doesn't start with a hyphen
if [[ "${1#-}" != "$1" ]]; then
    set -- /usr/local/bin/cloud_scanner "$@"
fi

# Execute the command
exec "$@"
