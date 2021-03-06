import axios from 'axios';
let url = "http://127.0.0.1:8088/";
/** 需要先登录再访问的路由 */
let api = url + 'api';
let form = url + "form"

/** 不需要登录就能访问的路由 */
let base = url + 'base';

let upload = url + 'upload';

/**
 * 获取注册验证码 1001
 */
export const req_getCodeForRegister = (email) => { 
    return axios.get(base + '/getCodeForRegister', {
		params:{
			email:email
		}
	}).then(res => res.data).catch(err => err);  
};


/**
 * 注册 1002
 */
export const req_register = (user) => { 
    return axios.post(base + '/register', {
		email:user.email,
		password:user.password,
		code:user.code
	}).then(res => res.data).catch(err => err); 
};


/**
 * 登录接口 1003
 */
export const req_logon = (user) => { 
    return axios.post(base + '/login', {
        email:user.email,
		password:user.password
    }).then(res => res.data).catch(err => err); 
};

/**
 * 发送重置密码邮件 1006
 */
export const req_sendResetPasswordEmail = (email) => { 
    return axios.post(base + '/sendResetPasswordEmail', {
        email:email
    }).then(res => res.data).catch(err => err); 
};

/**
 * 通过邮件重置密码 1007
 */
export const req_resetPasswordByEmail = (password,token) => { 
    return axios.post(base + '/resetPasswordByEmail', {
        password:password,
		token:token
    }).then(res => res.data).catch(err => err); 
};

/**
 * 设置个人名片 2001
 */
export const req_setUserCard = (user) => { 
    return axios.post(api, {
		nickName:user.nickName,
		email:user.email,
		label:user.label
    },{
		headers:{
			'method':'userCard',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err); 
};
/**
 * 获取用户名片 2002
 */
export const req_getUserCard = () => { 
    return axios.get(api, {
		headers:{
			'method':'userCard',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err);  
};

/**
 * 添加笔记本 3001
 */
export const req_addNotes = (notes) => { 
    return axios.post(api, {
		title:notes.title,
		subTitle:notes.subTitle,
		sort:notes.sort
    },{
		headers:{
			'method':'notes',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err); 
};

/**
 * 修改笔记本 3002
 */
export const req_saveNotes = (notes) => { 
    return axios.post(api, {
		id:notes.id,
		title:notes.title,
		subTitle:notes.subTitle,
		sort:notes.sort
    },{
		headers:{
			'method':'notes/update',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err); 
};

/**
 * 修改笔记本 3003
 */
export const req_deleteNotes = (id) => { 
    return axios.post(api, {
		id:id
    },{
		headers:{
			'method':'notes/delete',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err); 
};

/**
 * 获取笔记本列表 3004
 */
export const req_getNotesList = () => { 
    return axios.get(api, {
		headers:{
			'method':'notes',
			'token'	: window.localStorage.getItem("token")
		}
	}).then(res => res.data).catch(err => err);  
};