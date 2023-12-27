FROM 121665965379.dkr.ecr.ap-northeast-2.amazonaws.com/finlab-base-images:gallium-alpine

ENV HOST=0.0.0.0

# copy source
WORKDIR /app
COPY ./ ./

# build
RUN npm install
RUN npm run build

EXPOSE 3001

# start command
CMD [ "npm", "run", "start" ]
