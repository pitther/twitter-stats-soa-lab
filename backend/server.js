const needle = require("needle");
const fastify = require("fastify")({
  logger: true,
});

require('dotenv').config({ path: '.env.test.local' });

fastify.register(require("fastify-cors"));

fastify.listen(process.env.SERVER_PORT,'0.0.0.0', (err) => {
  if (err) throw err;
});

fastify.get("/", async (request, reply) => {
  const name = request.query.userName;
  console.log(name);
  if (!name) {
    reply.send({ error: "Invalid name" });
    return;
  }
  try {
    const response = await getRequest(name);
    reply.send(JSON.stringify(response));
  } catch (e) {
    console.log(e);
  }
});

async function getRequest(userName) {
  const params = {
    usernames: userName,
    "user.fields": "created_at,verified,public_metrics",
    expansions: "pinned_tweet_id",
  };

  const res = await needle("GET", process.env.ENDPOINT_URL, params, {
    headers: {
      "User-Agent": "v2UserLookupJS",
      authorization: `Bearer ${process.env.TWITTER_BEARER}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}
