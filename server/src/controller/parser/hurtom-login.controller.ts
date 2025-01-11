import { IExpressRequest, IExpressResponse, app } from '@server/express-app';
import axios from 'axios';
import { API_URL } from '@server/constants/api-url.constant';
import { IQueryReturn, toQuery } from '@server/utils/to-query.util';
import { rejects } from 'assert';
import { HURTOM_HEADERS } from './hurtom-all.controller';

const cheerio = require('cheerio');

export interface IHurtomLoginResponse {
    status: string;
    cookie: string;
}

interface IRequest extends IExpressRequest {
   
}

interface IResponse extends IExpressResponse<IHurtomLoginResponse, void> {}

app.post(API_URL.api.parser.hurtomLogin.toString(), async (req: IRequest, res: IResponse) => {
    const [data, error] = await hurtomLoginAsync();
    if (error) {
        return res.status(400).send(error);
    }
    return res.send(data);
});

export const hurtomLoginAsync = async (): Promise<IQueryReturn<IHurtomLoginResponse>> => {
    // mgerasika@gmail.com
    // o4jbfv30
    const url = `https://toloka.to/login.php`;
    const fd = new FormData();
    fd.append('username', 'mgerasika@gmail.com');
    fd.append('password', 'o4jbfv30');
    fd.append('autologin', 'on');
    fd.append('ssl', 'on');
    fd.append('redirect', 'index.php?');
    fd.append('login', 'Вхід');
    const [response, error] = await toQuery(() => axios.post(url, fd, {headers: HURTOM_HEADERS,  withCredentials: true,}, ));
    if (error) {
        return [undefined, error];
    }
    const cookies = response?.headers['set-cookie'] || [];
    return [
        {
            status: response?.statusText || '',
            cookie: 'toloka_318894_f=a%3A0%3A%7B%7D; toloka___f=a%3A0%3A%7B%7D; toloka___uf=0; toloka___u=a%3A0%3A%7B%7D; toloka_318894_uf=1729277947; toloka_sid=36f25ae8266920403ee964ec28d3b221; toloka___tt=1736602709; toloka_ssl=1; toloka_data=a%3A2%3A%7Bs%3A11%3A%22autologinid%22%3Bs%3A32%3A%22408c67e52ead84ee26d0a38cb5a8e972%22%3Bs%3A6%3A%22userid%22%3Bi%3A318894%3B%7D; toloka_318894_u=a%3A47%3A%7Bi%3A682201%3Bi%3A0%3Bi%3A682049%3Bi%3A0%3Bi%3A682192%3Bi%3A0%3Bi%3A68689%3Bi%3A0%3Bi%3A682099%3Bi%3A0%3Bi%3A651409%3Bi%3A0%3Bi%3A679532%3Bi%3A0%3Bi%3A681462%3Bi%3A0%3Bi%3A72320%3Bi%3A0%3Bi%3A666969%3Bi%3A0%3Bi%3A682081%3Bi%3A0%3Bi%3A681900%3Bi%3A0%3Bi%3A42182%3Bi%3A0%3Bi%3A113189%3Bi%3A0%3Bi%3A682200%3Bi%3A0%3Bi%3A681742%3Bi%3A0%3Bi%3A682190%3Bi%3A6255%3Bi%3A680718%3Bi%3A6255%3Bi%3A681927%3Bi%3A6255%3Bi%3A682215%3Bi%3A6255%3Bi%3A682174%3Bi%3A6255%3Bi%3A682211%3Bi%3A6255%3Bi%3A667846%3Bi%3A6255%3Bi%3A682207%3Bi%3A6255%3Bi%3A113916%3Bi%3A6255%3Bi%3A680678%3Bi%3A6255%3Bi%3A682208%3Bi%3A6255%3Bi%3A682217%3Bi%3A6255%3Bi%3A682195%3Bi%3A6255%3Bi%3A682075%3Bi%3A6255%3Bi%3A682053%3Bi%3A6255%3Bi%3A682032%3Bi%3A6255%3Bi%3A682213%3Bi%3A6255%3Bi%3A129586%3Bi%3A6255%3Bi%3A677380%3Bi%3A6255%3Bi%3A67558%3Bi%3A6255%3Bi%3A6081%3Bi%3A6255%3Bi%3A378999%3Bi%3A6255%3Bi%3A663617%3Bi%3A6255%3Bi%3A681774%3Bi%3A6255%3Bi%3A680450%3Bi%3A6255%3Bi%3A680534%3Bi%3A6255%3Bi%3A682097%3Bi%3A6255%3Bi%3A682218%3Bi%3A6255%3Bi%3A586263%3Bi%3A6255%3Bi%3A378695%3Bi%3A7324383%3Bi%3A112420%3Bi%3A7324383%3B%7D; toloka_318894_tt=1736602904'
        },
    ];
};
