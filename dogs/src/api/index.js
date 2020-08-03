import myajax from "./myajax"

export const  reqdetaildata=()=>myajax("/detaildata");

export const  onedetail=(id)=>myajax("/onedetail",{id});

export const  addregister=(ruleForm)=>myajax("/register",{ruleForm},"POST");

export const  reqlogin=(user)=>myajax("/login",{user},"POST");
