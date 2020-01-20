import axios from 'axios';

export async function login(userdata) {
	const baseUrl = "http://localhost:4000/user/login/";
	return axios.request({
		method: 'post',
		url: baseUrl,
		data: userdata
	});
}

export async function signup(userdata) {
	const baseUrl = "http://localhost:4000/user/signup/";
	return axios.request({
		method: 'post',
		url: baseUrl,
		data: userdata
	});
}

export async function getTheme() {
	const baseUrl = "http://localhost:4000/theme/gettheme/";
	return axios.request({
		method: 'get',
		url: baseUrl
	});
}