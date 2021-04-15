import Mock from 'mockjs';
Mock.mock('/api/product', {
  "status": 0,
  "data": {
    "id|1000-10010": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})
