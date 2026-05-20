# ETAPA 1: Construir la aplicación React + Vite
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Construir la app para producción
RUN npm run build

# ETAPA 2: Servir con Nginx
FROM nginx:alpine

# Copiar los archivos construidos al servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Nginx inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]