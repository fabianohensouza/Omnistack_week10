#!/bin/sh
DATA=$(date | cut -d " " -f 1,2,3)
read -p "Digite a mensagem do commit: " COMMITMESSAGE
git add *
git status
git commit -m "$COMMITMESSAGE realized at: $DATA"
git push -u origin master
