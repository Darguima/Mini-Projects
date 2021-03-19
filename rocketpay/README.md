<h1 align="center">
	<a href="https://github.com/Darguima/Mini-Projects/tree/master/rocketpay">
		<img src="./readme/RocketpayLogo.png">
	</a>
</h1>

Rocketpay was created during the [Rocketseat](https://rocketseat.com.br/) event `New Level Week #4`.
Rocketpay an API for a e-Bank. Create an account, deposit or withdraw and transfer money with your friends.

## Set up the Server

1. Create the database with Docker `sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`
2. Install dependencies with `mix deps.get`
3. Create and migrate your database with `mix ecto.setup`
4. Start Phoenix endpoint with `mix phx.server`

## API Documentation

1. Got to the `./documentation` with `cd documentation`
2. Run a local server with `npx serve` (needed have npx installed)
3. Access in your browser `http://localhost:5000`
