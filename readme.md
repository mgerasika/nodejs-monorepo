# Short info

This app - it's html parser that get all hd cartoons info from https://toloka.to/ and https://uakino.club/ websites and stores into database for quick search + downloading torrent files. All torrent files uploaded to [amazon s3](https://aws.amazon.com/s3/) storage & [firebase cdn](https://firebase.google.com/docs/hosting).

# Stack

## Backend

- [expressjs](https://expressjs.com/) - be framework
- [cheerio](https://cheerio.js.org/) - parsing html
- [postgresql](https://www.postgresql.org/) - database
- [typeorm](https://typeorm.io/) - orm for database
- [serverless](https://aws.amazon.com/lambda/) - aws lambda
- [serverless-http](https://github.com/dougmoscrop/serverless-http) -
  express bridge for aws lambda
- [swagger code generation](https://github.com/mgerasika/typescript-to-swagger) - automatically build swagger.spec from express code + automatically generate client proxy code.

## Frontend

- [nextjs](https://nextjs.org/) - customer web site (SEO)
- [cra](https://reactjs.org/docs/create-a-new-react-app.html) - admin panel
- [twin.macro](https://github.com/ben-rogerson/twin.macro) - css

## Future plans

- [dynamo-db/rds] (https://aws.amazon.com/dynamodb/) switch from static server to cloud

# Links

[customer web site](https://ua-video-torrent-next.web.app/)

![image](https://github.com/user-attachments/assets/ca974ab5-433a-4652-bf0b-c3bc8a9e651c)

## Internal

docker run --rm -v /mnt/hdd1/backup:/backup -e PGPASSWORD=test postgres:17 pg_dump -U test -h 192.168.0.16 -p 5434 -F c -b -v -f /backup/ua-video-torrent-$(date +%Y-%m-%d-%H:%M).dump ua-video-torrent



