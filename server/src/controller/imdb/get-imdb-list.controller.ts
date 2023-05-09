import { ImdbDto } from '@server/dto/imdb.dto';
import { IExpressRequest, IExpressResponse, app } from '@server/express-app';
import { typeOrmAsync } from '@server/utils/type-orm-async.util';
import { API_URL } from '@server/constants/api-url.constant';

export interface IImdbResponse {
    id: string;
    en_name: string;
    poster: string;
    imdb_rating: number;
    year: number;
    json: string;
    original_id: string;
}

interface IRequest extends IExpressRequest {
    query: {
        page?: number;
        limit: number;
    };
}

interface IResponse extends IExpressResponse<IImdbResponse[], void> {}

app.get(API_URL.api.imdb.toString(), async (req: IRequest, res: IResponse) => {
    const [data, error] = await getImdbAllAsync();
    if (error) {
        res.status(400).send('error' + error);
    } else {
        res.send(data);
    }
});

export const getImdbAllAsync = async () => {
    return typeOrmAsync<ImdbDto[]>(async (client) => {
        return [await client.getRepository(ImdbDto).find()];
    });
};
