<h1 align="center">
	<a href="https://github.com/Darguima/Mini-Projects/tree/master/ecoleta_nlw">
		<img src="./readme/EcoletaLogo.png">
	</a>
</h1>

Ecoleta was created during the [Rocketseat](https://rocketseat.com.br/) event `New Level Week #2`.
Ecoleta is a platform for recycling companies to publicize their collection points and to let people know where to go when they want to recycle.

<p align="center">
	<img src="./readme/Web_LandingPage.png" width="50%"/>
	<img src="./readme/Web_SignUpPointPage.png" width="50%"/>
</p>

<p align="center">
	<img src="./readme/Mobile_LandingPage.png" width="18%"/>
	<img src="./readme/Mobile_PointsMap.png" width="18%"/>
	<img src="./readme/Mobile_PointsDetail.png" width="18%"/>
</p>

## Setup the Server

1. npm install

2. npm run-script knex:migrate

3. npm run-script knex:seed

4. Correct the IP address on `server/src/controllers/pointsController.ts` x 2 and `server/src/controllers/itemsController.ts`

5. npm run-script dev

## Setup the Web and Mobile

1. Correct the IP address on `${mobile or web}/src/services/api.tsx`
