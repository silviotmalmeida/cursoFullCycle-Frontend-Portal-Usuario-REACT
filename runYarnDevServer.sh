#!/bin/bash

echo "Atualizando as dependências..."
docker exec -it frontend-user-portal-app bash -c "yarn dev"
