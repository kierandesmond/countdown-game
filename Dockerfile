# Use an official Node runtime as a parent image
FROM node:18.16

# Set the working directory in the container
WORKDIR /app

# Copies package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install Yarn and project dependencies
RUN npm install yarn

RUN yarn install

# Bundle app source inside Docker image
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Command to run the app
CMD ["yarn", "serve"]
