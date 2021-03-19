<h1 align="center">
	<a href="https://github.com/Darguima/Mini-Projects/tree/master/Calendrier">
		<img src="./readme/CalendrierLogo150.png">
	</a>
</h1>


My first "big" project written in React.js and Node.js. A simple calendar where you can log in to your account (or better log in to any account) and create your events to be accessed anywhere.

<p align="center">
	<img src="./readme/LoginPage.png" width="35%"/>
	<img src="./readme/LandingPage.png" width="35%"/>
	<img src="./readme/MonthPage.png" width="35%"/>
	<img src="./readme/CreateEventPopup.png" width="35%"/>
	<img src="./readme/ManageEventsPage.png" width="35%"/>
</p>

## Setup the Server

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
