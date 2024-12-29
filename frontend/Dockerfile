# Étape 1 : Build de l'application avec Node.js
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./ 
RUN npm install
COPY . .              
RUN npm run build       # Construire l'application (génère un dossier "dist")

# Étape 2 : Utilisation de Nginx pour servir les fichiers construits
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*           
COPY --from=build /app/dist /usr/share/nginx/html  
COPY default.conf /etc/nginx/conf.d/default.conf  

EXPOSE 80  
CMD ["nginx", "-g", "daemon off;"]
