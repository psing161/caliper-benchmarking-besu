FROM node:18.19-alpine

ENV caliper_version 0.4.2

# Install packages for dependency compilation
RUN apk add --no-cache python3 g++ make git

# execute as the "node" user, created in the base image
# USER node:node
WORKDIR /hyperledger/caliper/workspace

# 1 & 2. change the NPM global install directory
# https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory
# 3. install Caliper globally (also install the core package, so it's bumped to the global root directory, so external modules can access it)
RUN mkdir /home/node/.npm-global \
    && npm config set prefix '/home/node/.npm-global' \
    && npm install -g --only=prod @hyperledger/caliper-core@${caliper_version} @hyperledger/caliper-cli@${caliper_version}

ENV NODE_PATH /home/node/.npm-global/lib/node_modules
ENV PATH /home/node/.npm-global/bin:$PATH
ENV CALIPER_WORKSPACE /hyperledger/caliper/workspace
ENV CALIPER_BIND_ARGS -g

#ENTRYPOINT ["caliper"]
#CMD ["--version"]

#WORKDIR /hyperledger/caliper/workspace
COPY . .
