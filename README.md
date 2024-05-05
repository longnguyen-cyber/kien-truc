Step to run server architecture:

1. install packages: `yarn`

2. run docker compose(start docker desktop on your machine): `docker compose up -d`

3. run prisma:

   - `yarn prisma generate`
   - `yarn prisma db push`

4. run server: `yarn start:dev`

5. open browser and go to: `http://localhost:8080/api` to see the api documentation
