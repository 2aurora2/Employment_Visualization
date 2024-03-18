import CryptoJS from 'crypto-js'
import {useUserStore} from "@/store/modules/useUserStore.js";
import {ref} from "vue";

let httpUrl = new URL("https://spark-api.xf-yun.com/v3.5/chat");
let modelDomain;
// APPID，APISecret，APIKey在https://console.xfyun.cn/services/cbm这里获取
const APPID = 'f0ec4df0'
const API_SECRET = 'ZjQ1ZDUzOGRiNTBkMzM2NGFhODZlYzZk'
const API_KEY = '77d8a5991a9c306441ccf752ed05e1ab'

const userStore = useUserStore()
const messageList = ref(userStore.chatMessage)

function getWebsocketUrl() {
    // console.log(httpUrl.pathname)
    // 动态获取domain信息
    switch (httpUrl.pathname) {
        case "/v1.1/chat":
            modelDomain = "general";
            break;
        case "/v2.1/chat":
            modelDomain = "generalv2";
            break;
        case "/v3.1/chat":
            modelDomain = "generalv3";
            break;
        case "/v3.5/chat":
            modelDomain = "generalv3.5";
            break;
    }

    return new Promise((resolve, reject) => {
        let apiKey = API_KEY
        let apiSecret = API_SECRET


        let url = 'wss://' + httpUrl.host + httpUrl.pathname

        // console.log("我打印的" + httpUrl.host)
        // console.log("我打印的" + httpUrl.pathname)

        let host = location.host
        let date = new Date().toUTCString()
        let algorithm = 'hmac-sha256'
        let headers = 'host date request-line'
        let signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${httpUrl.pathname} HTTP/1.1`
        let signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
        let signature = CryptoJS.enc.Base64.stringify(signatureSha)
        let authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
        let authorization = btoa(authorizationOrigin)
        url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
        resolve(url)
    })
}

export default class TTSRecorder {
    constructor({
                    appId = APPID
                } = {}) {
        this.appId = appId
        this.status = 'init'
        this.total_res = ''
    }

    // 修改状态
    setStatus(status) {
        this.onWillStatusChange && this.onWillStatusChange(this.status, status)
        this.status = status
    }

    // 连接websocket
    connectWebSocket() {
        this.setStatus('ttsing')
        return getWebsocketUrl().then(url => {
            let ttsWS
            if ('WebSocket' in window) {
                ttsWS = new WebSocket(url)
            } else if ('MozWebSocket' in window) {
                ttsWS = new MozWebSocket(url)
            } else {
                alert('浏览器不支持WebSocket')
                return
            }
            this.ttsWS = ttsWS
            ttsWS.onopen = e => {
                this.webSocketSend()
            }
            ttsWS.onmessage = e => {
                this.result(e.data)
            }
            ttsWS.onerror = e => {
                clearTimeout(this.playTimeout)
                this.setStatus('error')
                alert('WebSocket报错，请f12查看详情')
                console.error(`详情查看：${encodeURI(url.replace('wss:', 'https:'))}`)
            }
            ttsWS.onclose = e => {
                console.log(e)
            }
        })
    }


    // websocket发送数据
    webSocketSend() {
        let params = {
            "header": {
                "app_id": this.appId
            }, "parameter": {
                "chat": {
                    "domain": "generalv3.5", "temperature": 0.5, "max_tokens": 1024
                }
            }, "payload": {
                "message": {
                    "text": messageList.value.slice(2)
                }
            }
        }
        messageList.value.push({
            role: 'assistant',
            content: '...'
        })
        // console.log(JSON.stringify(params))
        this.ttsWS.send(JSON.stringify(params))
    }

    start() {
        this.total_res = ""; // 请空回答历史
        this.connectWebSocket()
    }

    // websocket接收数据的处理
    result(resultData) {
        let jsonData = JSON.parse(resultData)
        this.total_res = this.total_res + jsonData['payload']['choices']['text'][0]['content']
        messageList.value[messageList.value.length - 1].content = this.total_res.replaceAll('*', '') + '...'
        // 提问失败
        if (jsonData.header.code !== 0) {
            alert(`提问失败: ${jsonData.header.code}:${jsonData.header.message}`)
            console.error(`${jsonData.header.code}:${jsonData.header.message}`)
            return
        }
        if (jsonData.header.code === 0 && jsonData.header.status === 2) {
            messageList.value[messageList.value.length - 1].content = this.total_res.replaceAll('*', '')
            this.ttsWS.close()
            this.status = "init"
        }
    }
}
