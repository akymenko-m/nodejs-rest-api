# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . /app/

# Install dependencies
RUN npm install

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]