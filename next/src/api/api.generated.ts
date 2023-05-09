/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disabled no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CustomAxiosResponse,
  CustomPromise,
  IBEError,
  IRequestService,
  formatUrl,
  requestService,
} from 'swagger-to-typescript2'
import { ENV } from '../env'

const API_SERVER_URL =
  process.env.NODE_ENV === 'development' ? ENV.LOCAL : ENV.FIREBASE_SERVER_URL

// DON'T REMOVE THIS COMMENTS!!! Code between comments auto-generated
// INSERT START
export interface IImdbResponse {
  id: string
  en_name: string
  poster: string
  imdb_rating: number
  year: number
  json: string
  original_id: string
}
export interface IPostImdbBody {
  en_name: string
  poster: string
  imdb_rating: number
  year: number
  json: string
  original_id: string
}
export interface IPutImdbBody {
  en_name: string
  poster: string
  imdb_rating: number
  year: number
  json: string
  original_id: string
}
export interface IMovieResponse {
  imdb_id: string
  id: string
  en_name: string
  ua_name: string
  href: string
  year: number
  title: string
  download_id: string
  size: number
  aws_s3_torrent_url: string
  imdb_original_id?: string
}
export interface IGroupMovieResponse {
  enName: string
  imdb_rating: number
  poster: string
  movies: ISearchMovieResponse[]
}
export interface ISearchMovieResponse {
  id: string
  en_name: string
  poster: string
  imdb_rating: number
  year: number
  original_id: string
  imdb_id: string
  ua_name: string
  href: string
  title: string
  download_id: string
  size: number
  aws_s3_torrent_url: string
  imdb_original_id?: string
}
export interface IPostMovieBody {
  imdb_id: string
  en_name: string
  ua_name: string
  href: string
  year: number
  title: string
  download_id: string
  size: number
  aws_s3_torrent_url: string
  imdb_original_id?: string
}
export interface IPutMovieBody {
  imdb_id: string
  en_name: string
  ua_name: string
  href: string
  year: number
  title: string
  download_id: string
  size: number
  aws_s3_torrent_url: string
  imdb_original_id?: string
}
export interface IHurtomInfoResponse {
  id: string
  name: string
  year: string
  uaName: string
  enName: string
  href: string
  size: number
  downloadId: string
}
export interface ISearchImdbBody {
  enName: string
  year: string
  id?: string
}
export interface IImdbResultResponse {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: IImdbRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface IImdbRating {
  Source: string
  Value: string
}
export interface IError {
  message: string
  code: string
}
export interface ISetupBody {
  updateHurtom: boolean
  updateImdb: boolean
  uploadToCdn: boolean
  searchImdb: boolean
  uploadTorrentToS3FromMovieDB: boolean
}
export type TCdnGetFileNameGetError = '' | 'undefined'
export type TCdnGetFileNameHasFileGetError = '' | 'undefined'
export type TCdnUploadPostError = '' | 'undefined'
export type TImdbIdDeleteError = '' | 'undefined'
export type TImdbIdGetError = '' | 'undefined'
export type TImdbIdPutError = '' | 'undefined'
export type TImdbGetError = '' | 'undefined'
export type TImdbPostError = '' | 'undefined'
export type TMovieIdDeleteError = '' | 'undefined'
export type TMovieIdGetError = '' | 'undefined'
export type TMovieIdPutError = '' | 'undefined'
export type TMovieGetError = '' | 'undefined'
export type TMoviePostError = '' | 'undefined'
export type TMovieGroupSearchIdGetError = '' | 'undefined'
export type TMovieGroupSearchGetError = '' | 'undefined'
export type TMovieSearchGetError = '' | 'undefined'
export type TS3GetIdGetError = '' | 'undefined'
export type TS3GetIdHasFileGetError = '' | 'undefined'
export type TS3UploadPostError = '' | 'undefined'
export type TToolsGetHurtomAllGetError = '' | 'undefined'
export type TToolsSearchImdbInfoPostError = '' | 'undefined'
export type TToolsSetupPostError = '' | 'undefined'
export type TPartialErrorCodes =
  | TCdnGetFileNameGetError
  | TCdnGetFileNameHasFileGetError
  | TCdnUploadPostError
  | TImdbIdDeleteError
  | TImdbIdGetError
  | TImdbIdPutError
  | TImdbGetError
  | TImdbPostError
  | TMovieIdDeleteError
  | TMovieIdGetError
  | TMovieIdPutError
  | TMovieGetError
  | TMoviePostError
  | TMovieGroupSearchIdGetError
  | TMovieGroupSearchGetError
  | TMovieSearchGetError
  | TS3GetIdGetError
  | TS3GetIdHasFileGetError
  | TS3UploadPostError
  | TToolsGetHurtomAllGetError
  | TToolsSearchImdbInfoPostError
  | TToolsSetupPostError
  | ''

export const createApiRequest = (rs: IRequestService) => ({
  cdnGetFileNameGet: (
    file_name: string,
  ): CustomPromise<
    CustomAxiosResponse<void, TCdnGetFileNameGetError>,
    IBEError<TCdnGetFileNameGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/cdn/get/${file_name}`)),

  cdnGetFileNameHasFileGet: (
    file_name: string,
  ): CustomPromise<
    CustomAxiosResponse<void, TCdnGetFileNameHasFileGetError>,
    IBEError<TCdnGetFileNameHasFileGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/cdn/get/${file_name}has-file/`)),

  cdnUploadPost: (): CustomPromise<
    CustomAxiosResponse<void, TCdnUploadPostError>,
    IBEError<TCdnUploadPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/cdn/upload/`)),

  imdbIdDelete: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<IImdbResponse, TImdbIdDeleteError>,
    IBEError<TImdbIdDeleteError>
  > => rs.delete(formatUrl(API_SERVER_URL + `api/imdb/${id}`)),

  imdbIdGet: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<IImdbResponse, TImdbIdGetError>,
    IBEError<TImdbIdGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/imdb/${id}`)),

  imdbIdPut: (
    id: string,
    body: IPutImdbBody,
  ): CustomPromise<
    CustomAxiosResponse<IImdbResponse, TImdbIdPutError>,
    IBEError<TImdbIdPutError>
  > => rs.put(formatUrl(API_SERVER_URL + `api/imdb/${id}`), body),

  imdbGet: (
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<Array<IImdbResponse>, TImdbGetError>,
    IBEError<TImdbGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/imdb/`, query)),

  imdbPost: (
    body: IPostImdbBody,
  ): CustomPromise<
    CustomAxiosResponse<IImdbResponse, TImdbPostError>,
    IBEError<TImdbPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/imdb/`), body),

  movieIdDelete: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<Array<IMovieResponse>, TMovieIdDeleteError>,
    IBEError<TMovieIdDeleteError>
  > => rs.delete(formatUrl(API_SERVER_URL + `api/movie/${id}`)),

  movieIdGet: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<IMovieResponse, TMovieIdGetError>,
    IBEError<TMovieIdGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/movie/${id}`)),

  movieIdPut: (
    id: string,
    body: IPutMovieBody,
  ): CustomPromise<
    CustomAxiosResponse<IMovieResponse, TMovieIdPutError>,
    IBEError<TMovieIdPutError>
  > => rs.put(formatUrl(API_SERVER_URL + `api/movie/${id}`), body),

  movieGet: (
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<Array<IMovieResponse>, TMovieGetError>,
    IBEError<TMovieGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/movie/`, query)),

  moviePost: (
    body: IPostMovieBody,
  ): CustomPromise<
    CustomAxiosResponse<Array<IMovieResponse>, TMoviePostError>,
    IBEError<TMoviePostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/movie/`), body),

  movieGroupSearchIdGet: (
    id: string,
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<IGroupMovieResponse, TMovieGroupSearchIdGetError>,
    IBEError<TMovieGroupSearchIdGetError>
  > =>
    rs.get(formatUrl(API_SERVER_URL + `api/movie/group-search/${id}`, query)),

  movieGroupSearchGet: (
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<Array<IGroupMovieResponse>, TMovieGroupSearchGetError>,
    IBEError<TMovieGroupSearchGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/movie/group-search/`, query)),

  movieSearchGet: (
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<Array<ISearchMovieResponse>, TMovieSearchGetError>,
    IBEError<TMovieSearchGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/movie/search/`, query)),

  s3GetIdGet: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<string, TS3GetIdGetError>,
    IBEError<TS3GetIdGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/s3/get/${id}`)),

  s3GetIdHasFileGet: (
    id: string,
  ): CustomPromise<
    CustomAxiosResponse<void, TS3GetIdHasFileGetError>,
    IBEError<TS3GetIdHasFileGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/s3/get/${id}has-file/`)),

  s3UploadPost: (): CustomPromise<
    CustomAxiosResponse<void, TS3UploadPostError>,
    IBEError<TS3UploadPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/s3/upload/`)),

  toolsGetHurtomAllGet: (
    query: { page?: number; limit?: number } | undefined,
  ): CustomPromise<
    CustomAxiosResponse<Array<IHurtomInfoResponse>, TToolsGetHurtomAllGetError>,
    IBEError<TToolsGetHurtomAllGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/tools/get-hurtom-all/`, query)),

  toolsSearchImdbInfoPost: (
    body: ISearchImdbBody,
  ): CustomPromise<
    CustomAxiosResponse<IImdbResultResponse, TToolsSearchImdbInfoPostError>,
    IBEError<TToolsSearchImdbInfoPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/tools/search-imdb-info/`), body),

  toolsSetupPost: (
    body: ISetupBody,
  ): CustomPromise<
    CustomAxiosResponse<string[], TToolsSetupPostError>,
    IBEError<TToolsSetupPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/tools/setup/`), body),
})

const URL = {
  cdnGetFileNameGet: (file_name: string): string => `api/cdn/get/${file_name}`,
  cdnGetFileNameHasFileGet: (file_name: string): string =>
    `api/cdn/get/${file_name}has-file/`,
  cdnUploadPost: (): string => `api/cdn/upload/`,
  imdbIdDelete: (id: string): string => `api/imdb/${id}`,
  imdbIdGet: (id: string): string => `api/imdb/${id}`,
  imdbIdPut: (id: string): string => `api/imdb/${id}`,
  imdbGet: (): string => `api/imdb/`,
  imdbPost: (): string => `api/imdb/`,
  movieIdDelete: (id: string): string => `api/movie/${id}`,
  movieIdGet: (id: string): string => `api/movie/${id}`,
  movieIdPut: (id: string): string => `api/movie/${id}`,
  movieGet: (): string => `api/movie/`,
  moviePost: (): string => `api/movie/`,
  movieGroupSearchIdGet: (id: string): string => `api/movie/group-search/${id}`,
  movieGroupSearchGet: (): string => `api/movie/group-search/`,
  movieSearchGet: (): string => `api/movie/search/`,
  s3GetIdGet: (id: string): string => `api/s3/get/${id}`,
  s3GetIdHasFileGet: (id: string): string => `api/s3/get/${id}has-file/`,
  s3UploadPost: (): string => `api/s3/upload/`,
  toolsGetHurtomAllGet: (): string => `api/tools/get-hurtom-all/`,
  toolsSearchImdbInfoPost: (): string => `api/tools/search-imdb-info/`,
  toolsSetupPost: (): string => `api/tools/setup/`,
}
// INSERT END
// DON'T REMOVE THIS COMMENTS!!!

export const API_URL = URL
export const api = {
  ...createApiRequest(requestService),
}
