# node-basic-auth

That is all the code we needed to write, now open terminal and write the run command as:

`npm install`

You will need to create an `.env` file and write your own connection parameters:

```
{
  "ATLAS_URI": 'YOUR_OWN_ATLAS_URI (MongoDb Uri)',
  "JWT_SECRET": 'YOUR_OWN_JWT_SECRET'
}
```

Now go to localhost:3000/api/user and test the user routes with a REST Client.
That’s it! You have successfully made an API using NodeJs.
Thank You!
