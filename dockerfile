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


##those are multi-satges
# Stage 1: Build (using Node Alpine)
#FROM node:18-alpine AS builder

# Install build tools (optional, only if your dependencies need compiling)
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy project files and build
COPY . .
RUN npm run build

# Stage 2: Runtime (minimal Alpine)
FROM node:18-alpine

WORKDIR /app

# Install 'serve' to host the static files
RUN npm install -g serve && npm cache clean --force

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Run the server
CMD ["serve", "-s", "dist", "-l", "3000"]


#this is extra portion which is more lighter than others

# ===== Stage 1: Build =====
FROM node:20-alpine AS builder

WORKDIR /app

# Install all dependencies including devDependencies
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ===== Stage 2: Runtime =====
FROM alpine:3.19

RUN apk add --no-cache nodejs

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Minimal Node static server
RUN echo 'import http from "http";import fs from "fs";import path from "path";\
const port=3000;http.createServer((req,res)=>{let f="./dist"+(req.url=="/"?"/index.html":req.url);\
fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end("Not Found");}else{res.writeHead(200);res.end(d);}});\
}).listen(port,()=>console.log(`Server running on port ${port}`));' > server.mjs

EXPOSE 3000
CMD ["node", "server.mjs"]
