#!/bin/bash

echo "Formatando com prettier..."
docker exec -it frontend-user-portal-app bash -c "npx prettier . --write"
