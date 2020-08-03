import Mock from "mockjs"
let detaildata=[
  {
    id:1,
    img:require("../assets/img/jinmao.png"),
    title:"金毛",
    gender:"母",
    price:"2000"

  },
  {
    id:2,
    img:require("../assets/img/itaidi.png"),
    title:"泰迪",
    gender:"公",
    price:"1800"
  },
  {
    id:3,
    img:require("../assets/img/keji.png"),
    title:"柯基",
    gender:"公",
    price:"2500"
  },
  {
    id:4,
    img:require("../assets/img/alasijia.png"),
    title:"阿拉斯加",
    gender:"公",
    price:"2200"
  },
  {
    id:5,
    img:require("../assets/img/hashiqi.png"),
    title:"哈士奇",
    gender:"母",
    price:"1800"
  },
  {
    id:6,
    img:require("../assets/img/jiafei.png"),
    title:"加菲猫",
    gender:"公",
    price:"3000"
  },
  {
    id:7,
    img:require("../assets/img/bixiong.png"),
    title:"比熊",
    gender:"母",
    price:"2000"
  },
  {
    id:8,
    img:require("../assets/img/bianmu.png"),
    title:"边牧",
    gender:"公",
    price:"3000"
  },
  {
    id:9,
    img:require("../assets/img/labuladuo .png"),
    title:"拉布拉多",
    gender:"公",
    price:"3000"
  }

]
let registerlist=[
  {id:"1",tel:"18815612030",pass:"123"}
]

Mock.mock("/detaildata", detaildata);

Mock.mock(RegExp("/onedetail" + ".*"), "get", (options) => {

  let id1 = options.url.split("?")[1].split("=")[1];

  //filter过滤的是一个数组
  return detaildata.filter(item => item.id == id1)[0];
})

Mock.mock("/register", "post", (ruleForm) => {
  let idx = registerlist[registerlist.length - 1].id + 1;
  console.log("ruleForm", ruleForm);
  let newregister = JSON.parse(ruleForm.body).ruleForm;
  registerlist.push({
      id: idx,
      tel: newregister.tel,
      pass: newregister.pass,
  })
  console.log(" registerlist",registerlist)
  return {
      msg: "注册成功"
  }
})

//get方法就会出现地址参数，要用正则表达式在进行截取

Mock.mock("/login" , "post", (user) => {
  console.log("user",user)
  let newuser = JSON.parse(user.body).user[0];
  console.log("newuser",newuser )
 return registerlist.filter((item )=> {
 if(item.tel ==  newuser .tel&&item.pass== newuser .pass){
   return item;
 }
  })[0];

})
