import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from './api.js';

const endpoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    getByCarId: '/data/cars/',
    delById:'/data/cars/',
    editById: '/data/cars/',
}

export async function getAll(){
    return await api.get(endpoints.getAll)
}


export async function create(data){
    return await api.post(endpoints.create, data)
}

export async function getById(id){
    return await api.get(endpoints.getByCarId + id)
}

export async function deleteCar(id){
    return await api.del(endpoints.delById + id)
}

export async function editCar(id,data){
    return await api.put(endpoints.editById + id, data)
}

export async function getAllByOwnerId(id){
    return await api.get(`/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
}

export async function searchByYear(query){
    return await api.get(`/data/cars?where=year%3D${query}`)
}