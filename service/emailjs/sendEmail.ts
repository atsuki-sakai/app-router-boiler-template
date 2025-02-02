
import { init, send } from "@emailjs/browser"

function sendEmail(parameter: {[key: string]: string}, templateID: string, successUrl: string, errorUrl: string):  void {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    if (publicKey !== undefined && serviceID !== undefined && templateID !== undefined) {
        init(publicKey)
        send(serviceID, templateID, parameter)
        .then(() => {
            window.location.href = successUrl
        })
        .catch(() => {
            window.location.href = errorUrl
        })
    } else {
        console.error("EmailJSの環境変数を確認して下さい。")
    }
}

export default sendEmail