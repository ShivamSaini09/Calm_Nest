FROM node:18

WORKDIR /app

# Copy package files and install backend dependencies
COPY backend/package*.json ./
RUN npm install

# Copy backend and frontend folders
COPY backend/ .
COPY Frontend/ ./Frontend/

EXPOSE 3000

CMD ["node", "app.js"]
