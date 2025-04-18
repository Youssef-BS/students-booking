# Étape 1 : Build de l'application Angular
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers package + angular config
COPY package.json package-lock.json ./
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Build production Angular
RUN npx ng build --configuration=production --output-path=dist

# Étape 2 : Serveur Nginx
FROM nginx:alpine

# Copier les fichiers buildés
COPY --from=build /app/dist /usr/share/nginx/html

# Ajouter la config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]