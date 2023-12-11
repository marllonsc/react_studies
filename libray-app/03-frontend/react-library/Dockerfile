# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code into the container
COPY . .

# Build the app
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Define environment variable
ENV REACT_APP_API_URL=http://api.library.com

# Command to run the application
CMD ["npm", "start"]