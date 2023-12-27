FROM 121665965379.dkr.ecr.ap-northeast-2.amazonaws.com/finlab-base-images:gallium-alpine

ENV HOST=0.0.0.0

# copy source
WORKDIR /app
COPY ./ ./

# build
RUN yarn install
RUN yarn build

EXPOSE 3001

# start command
CMD [ "yarn", "start" ]
