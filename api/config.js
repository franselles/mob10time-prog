module.exports = {
  port: process.env.PORT || 8080,
  db:
    process.env.MONGODB_URI ||
    'mongodb+srv://dbF54n:Uzituxez1800@cluster0-hwqzr.mongodb.net/test?retryWrites=true&w=majority'
};

// 'mongodb+srv://dbF54n:Uzituxez1800@cluster0-hwqzr.mongodb.net/test?retryWrites=true&w=majority'
// process.env.MONGODB_URI
// 'mongodb://localhost/successfully'
