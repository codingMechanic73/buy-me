# aliasing the stage
FROM node:16.13.1 As development 

# set the environment to development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# setting up the working directory in docker container
# All RUN the commands will be executed in the working dir
WORKDIR /usr/src/app

# copy the package.json and package-lock.json
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the code from local to container
COPY . .

# run the build
RUN npm run build


# alias the stage
FROM node:16.13.1 as production

# set the environment to production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# set the working directory on docker container
WORKDIR /usr/src/app

# copy the package.json and package-lock.json
COPY package*.json ./

# install only the prod dependencies
RUN npm install --only=production

# copy the code from local to working director
COPY . .

# copy the code from dev to dist
# COPY --from=development /usr/src/app/dist ./dist

# run the build
RUN npm run build

# start the production server
RUN npm run start:prod
# CMD ["node", "dist/main"]