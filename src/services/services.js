import axios from "axios";
export const request = (text) => {
    const token = '5021816572:AAFeHhlrsZ4MfkDZa3ko7JmDyr91YylOpJ8';
    const chat_id = '1009620283';
    const api = `https://api.telegram.org/bot${token}/sendMessage`;
    return axios.post(api, {
        parse_mode: 'HTML',
        text: `Имя: ${text.name}\n\ Номер телефона: ${text.number} `,chat_id
    })
}