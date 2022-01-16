// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import endpoints from './endpoints.json';
export async function getNeko(name){
    if(!endpoints[name]){
        throw new Error(`Invalid endpoint: ${name}`);
    };
    const resp=await fetch('https://nekos.life/api/v2'+endpoints[name]);
    return(await resp.json()).url;
};