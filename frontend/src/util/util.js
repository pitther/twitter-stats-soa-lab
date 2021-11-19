import {
  avgFollowers,
  avgFollowingCount,
  avgListedCount,
  avgTweetCount,
} from "./сonstants";

const saturate = (num) => {
  const parsed = parseFloat(num);
  if (parsed > 1) return 1;
  return parsed;
};

const getRatedUser = (data) => {
  const user = {
    found: true,
    createdAt: data.created_at.split("T")[0],
    id: data.id,
    name: data.name,
    userName: data.username,
    verified: data.verified,
    publicMetrics: {
      followersCount: data.public_metrics.followers_count,
      followingCount: data.public_metrics.following_count,
      tweetCount: data.public_metrics.tweet_count,
      listedCount: data.public_metrics.listed_count,
    },
    stats: {
      popularity: 0,
      mentioning: 0,
      activity: 0,
      overall: 0,
    },
    badges: [],
  };

  user.stats.popularity = saturate(
    user.publicMetrics.followersCount / avgFollowers
  );
  user.stats.mentioning = saturate(
    user.publicMetrics.listedCount / avgListedCount
  );
  user.stats.activity =
    saturate(user.publicMetrics.tweetCount / avgTweetCount) * 0.8 +
    saturate(user.publicMetrics.followingCount / avgFollowingCount) * 0.2;

  user.stats.overall = saturate(
    user.stats.popularity * 0.6 +
      user.stats.mentioning * 0.3 +
      user.stats.activity * 0.1
  );

  if (user.verified) user.badges.push({ label: "VERIFIED", color: "blue" });
  if (user.stats.popularity > 0.5)
    user.badges.push({ label: "POPULAR", color: "yellow" });

  if (user.stats.activity > 0.5)
    user.badges.push({ label: "ACTIVE", color: "green" });
  return user;
};

export { saturate, getRatedUser };
