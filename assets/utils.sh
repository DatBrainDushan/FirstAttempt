#!/usr/bin/env bash
# Change to the directory of your Node.js project
cd /path/to/your/nodejs/project

# Loop over all files in the directory and its subdirectories
find . -type f -exec sed -i 's/fibcous/petProj/g' {} +
