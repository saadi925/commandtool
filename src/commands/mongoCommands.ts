const MongoDBCommandsList = [
  {
    subheading: "MongoDb Connection (in TypeScript)",
    commands: [
      `import {mongoose} from 'mongoose';
      const MONGOURI ='mongodb://127.0.0.1:27017/database';
      export const ConnectToMongo = async() : Promise<void | string> => {
          try {
              await mongoose.connect(MONGOURI);
              console.log("Connected to the Database");
          } catch (error) {
              console.log(\`Error Occurred at MongoDB Connection : \${error}\`);
          }
      };`,
    ],
    searchKeywords: [
      "mongoose connection",
      "mongodb connection",
      "typescript mongodb connection",
    ],
  },
  {
    subheading: "Starting and Stopping MongoDB:",
    commands: ["mongod", "mongo"],
    searchKeywords: ["mongodb start", "mongodb stop"],
  },
  {
    subheading: "Database Operations:",
    commands: ["show dbs", "use <database>", "db.dropDatabase()"],
    searchKeywords: [
      "show database collection",
      "use a database",
      "drop database",
      "mongodb",
    ],
  },
  {
    subheading: "Collection Operations:",
    commands: [
      "show collections",
      "db.createCollection('<collection>')",
      "db.<collection>.drop()",
    ],
    searchKeywords: [
      "show database collections",
      "create database collections",
      "drop database collection",
      "db collections",
      "mongodb",
    ],
  },
  {
    subheading: "Document CRUD Operations:",
    commands: [
      "db.<collection>.insertOne(<document>)",
      "db.<collection>.insertMany([<document1>, <document2>, ...])",
      "db.<collection>.find()",
      "db.<collection>.findOne(<query>)",
      "db.<collection>.updateOne(<filter>, <update>)",
      "db.<collection>.updateMany(<filter>, <update>)",
      "db.<collection>.deleteOne(<query>)",
      "db.<collection>.deleteMany(<query>)",
    ],
    searchKeywords: [
      "insert a document",
      "insert multiple documents",
      "find a document",
      "mongodb document",
      "updata a document",
      "delete a document",
      "delete multiples documents",
      "mongodb",
    ],
  },
  {
    subheading: "Query Operators:",
    commands: [
      "{ $eq: value }",
      "{ $ne: value }",
      "{ $gt: value }",
      "{ $gte: value }",
      "{ $lt: value }",
      "{ $lte: value }",
      "{ $in: [value1, value2, ...] }",
      "{ $nin: [value1, value2, ...] }",
      "{ $and: [ { expr1 }, { expr2 }, ... ] }",
      "{ $or: [ { expr1 }, { expr2 }, ... ] }",
      "{ $not: { expr } }",
      "{ $exists: true/false }",
      "{ $type: BSONType }",
      "{ field: { $regex: 'pattern' } }",
    ],
    searchKeywords: ["mongodb", "mongodb operations", "mongodb query"],
  },
  {
    subheading: "Indexing:",
    commands: ["db.<collection>.createIndex(<keys>, <options>)"],
    searchKeywords: ["mongodb", "mongodb indexing", "mongodb create index"],
  },
  {
    subheading: "Aggregation:",
    commands: ["db.<collection>.aggregate([<pipeline>])"],
    searchKeywords: [
      "mongodb",
      "mongodb aggregation",
      "mongodb aggregate pipline",
    ],
  },
  {
    subheading: "Sorting and Limiting:",
    commands: [
      "db.<collection>.find().sort(<field>)",
      "db.<collection>.find().limit(<number>)",
    ],
    searchKeywords: ["mongodb", "mongodb sort", "mongodb find limit number"],
  },
  {
    subheading: "Updating Nested Documents and Arrays:",
    commands: [
      "db.<collection>.updateOne(<filter>, { $set: { 'field.nestedField': value } })",
      "db.<collection>.updateOne(<filter>, { $push: { arrayField: value } })",
      "db.<collection>.updateOne(<filter>, { $pull: { arrayField: value } })",
    ],
    searchKeywords: [
      "mongodb nested document arrays",
      "nested document update one",
    ],
  },
  {
    subheading: "Data Backup and Restore:",
    commands: ["mongodump", "mongorestore"],
    searchKeywords: ["mongodb data restore", "mongodb data backup"],
  },
];

export default MongoDBCommandsList;
