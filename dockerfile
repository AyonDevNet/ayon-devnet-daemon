# Use Ubuntu-based Node image for traditional approach
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Serve the static build using 'serve'
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
