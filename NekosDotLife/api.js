// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import endpoints from './endpoints.json';
export async function getNeko(name, nsfwToggle){
    const resp=await fetch(`https://nekos.life/api/v2/${nsfwToggle?endpoints.nsfw[name]:endpoints.sfw[name]}`);
    return(await resp.json()).url;
};