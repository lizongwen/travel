import axios from 'axios'
import qs from 'qs'
const service = axios.create({
	baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
})
const err = (error) => {
	const resp = error.response;
	if (resp) {
		// eslint-disable-next-line no-console
		if (resp.status === 404) {
			// eslint-disable-next-line no-console
		}
		if (resp.status === 403) {
			// 
		}
		if (resp.status === 401) {
			// 
		}
	}
	return Promise.reject(error)
}

const VueAxios = {
	vm: {},
	// eslint-disable-next-line no-unused-vars
	install(Vue, instance) {
		if (this.installed) {
			return
		}
		this.installed = true
		if (!instance) {
			// eslint-disable-next-line no-console
			return
		}

		Vue.axios = instance

		Object.defineProperties(Vue.prototype, {
			$http: {
				get: function () {
					return instance
				}
			}
		})
	}
}
// request interceptor
service.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
	}
	config.data = qs.stringify(config.data)
	return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
	return response.data
}, err)
const installer = {
	install(Vue) {
		Vue.use(VueAxios, service)
	}
}

export {
	installer as VueAxios,
	service as axios
}