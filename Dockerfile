FROM node:22.12.0-bullseye-slim as build-stage

RUN mkdir /builder/
COPY . /builder/
WORKDIR /builder/

ARG VITE_BUILD_NUMBER

# Add build number to .env
RUN npx -y build-number-generator > build_number.txt && \
    echo "Generated Build Number:" && cat build_number.txt && \
    export VITE_BUILD_NUMBER=$(cat build_number.txt) && \
    echo "VITE_BUILD_NUMBER=$VITE_BUILD_NUMBER" > .env

RUN npm install
RUN npm run -s build

FROM nginx:stable-alpine as production-stage
RUN mkdir /app/
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /builder/dist/ /app
WORKDIR /app
