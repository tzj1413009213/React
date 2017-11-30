import baseurl from '../../libs/baseurl';
export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: baseurl + 'home'
    }
}

export function p_car(api,sql){
    return {
        types: ['BeforeRequest', 'p_car', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}
export function p_addcar(api,sql){
    return {
        types: ['BeforeRequest', 'p_addcar', 'RequestError'],
        url: api,
        data:{
        	else:sql
        }
    }
}
export function p_updatecar(api,sql){
    return {
        types: ['BeforeRequest', 'p_updatecar', 'RequestError'],
        url: api,
        data:{
        	else:sql
        }
    }
}


export function Find(api,sql){
    return {
        types: ['BeforeRequest', 'p-Requested', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}

export function init(api,sql){
    return {
        types: ['BeforeRequest', 'p-cakeCookies', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}

export function car_num(api,sql){
    return {
        types: ['BeforeRequest', 'p_car_num', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}