module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DB_URL || 'postgres://awbqezlkeqflrp:04bf7d41c3aa4863e0d561dcf43801a7544585bef7ef2c188def4ab7d3cc9210@ec2-54-156-121-142.compute-1.amazonaws.com:5432/d41mg672cagfv0',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful-test'

  }