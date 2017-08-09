const mongo = require('mongodb').MongoClient;
const Bluebird = require('bluebird');
const config = require('../config');

const hostUrl = config.mongodbUri;

class PipelineRepository {
  constructor() {
    this.collection = null;
  }

  findOne(pipeline) {
    return this.getCollection()
      .then(collection => collection.findOne(pipeline));
  }

  save(pipeline) {
    return this.getCollection()
      .then(collection => collection.insertOne(pipeline))
      .then(() => pipeline);
  }

  getCollection() {
    if (this.collection !== null) {
      return Bluebird.resolve(this.collection);
    }

    return mongo.connect(hostUrl, {promiseLibrary: Bluebird})
      .then(db => db.collection('pipelines'))
      .tap(collection => this.collection = collection);
  }
}

module.exports = PipelineRepository;
