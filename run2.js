#!/bin/sh
UUID=${UUID:-'9c2d3f63-d6ed-45cd-9a9b-fa4a1154766a'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
