module.exports = function(mongoose) {
    var mongoDB = process.env.CONNECT;
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, 'MongoDB connection error:'));
}