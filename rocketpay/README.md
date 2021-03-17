# Rocketpay

## Set up the Server

1. Create the database with Docker `sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`
2. Install dependencies with `mix deps.get`
3. Create and migrate your database with `mix ecto.setup`
4. Start Phoenix endpoint with `mix phx.server`

## Api Documentation

1. Got to the `./documentation` with `cd documentation`
2. Run a local server with `npx serve` (needed have npx installed)
3. Access in your browser `http://localhost:5000`
