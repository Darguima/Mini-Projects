# Calendrier

## Set up the Server

1. Create a MongoDB image on Docker

> sudo docker run  --name mongodb -d mongo

2.  Install mongo and mongod (Commands for Ubuntu)

> sudo apt install mongodb-clients mongodb-server-core

3. Create `/data/db` for store the MongoDB

> sudo mkdir /data
> sudo mkdir /data/db

4. Run mongod and next create the `calendrierApi` table

> mongod
> mongo
> use calendrierApi

5. Your MongoDb is now configured. You can close the mongo but need still with mongod running
