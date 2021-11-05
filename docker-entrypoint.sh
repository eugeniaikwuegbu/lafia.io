#!/bin/bash

cd /home/gopai-service || exit

yarn

yarn tsc

pm2-runtime start ecosystem.config.js
