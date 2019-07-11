FROM node:10
WORKDIR /app
RUN npm install yarn -g
COPY package.json .
RUN yarn install
COPY . ./
RUN yarn build

#--------------------------------------
# Stage: Packaging Apps
#--------------------------------------
FROM nginx:1.15-alpine

VOLUME /app
COPY --from=0 /app/build /app

EXPOSE 80

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]
