# stage 1

FROM node:alpine AS my-app-build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /usr/src/app/dist/app-to-run-inside-docker /usr/share/nginx/html