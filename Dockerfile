# Utilisez une image Node.js comme base
FROM node:14

# Définissez le répertoire de travail sur /root/Portfolio
WORKDIR /root/Portfolio

# Copiez les fichiers nécessaires dans l'image
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["npm", "start"]