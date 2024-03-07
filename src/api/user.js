import service from '@/http/service.js'

// POST接口写法
export const testPostService = (data) => {
    return service.post('/post', {data: data})
}

// GET接口写法
export const testGetService = () => {
    return service.get('/get?test=test')
}