#!/bin/sh

set -e
config_file="/etc/nginx/nginx.conf"

if [[ -n "$PORT" ]] ; then
  search_query="80"
  grep "$search_query" "$config_file"
  sed -i "s,$search_query,$PORT,g" "$config_file"
fi

nginx -g 'daemon off;'
