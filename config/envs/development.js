module.exports = {
  database: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/dev-db",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  redis: {
    uri: process.env.REDIS_URI || "redis://127.0.0.1:6379",
    cachePrefix: process.env.CACHE_PREFIX || "dev-service:cache",
    cortexPrefix: process.env.CORTEX_PREFIX || "none",
    oysterPrefix: process.env.OYSTER_PREFIX || "none",
  },
  server: {
    userPort: process.env.USER_PORT || 5111,
    adminPort: process.env.ADMIN_PORT || 5222,
    adminUrl: process.env.ADMIN_URL || "http://localhost:5222",
  },
  security: {
    longTokenSecret:
      process.env.LONG_TOKEN_SECRET || "default-long-token-secret",
    shortTokenSecret:
      process.env.SHORT_TOKEN_SECRET || "default-short-token-secret",
    naclSecret: process.env.NACL_SECRET || "default-nacl-secret",
  },
  environment: process.env.ENV || "development",
  serviceName: process.env.SERVICE_NAME || "dev-service",
};
