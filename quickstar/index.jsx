// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import{after}from"@cumcord/patcher";
import{findByDisplayName}from"@cumcord/modules/webpack";
export default()=>{
    return{
        onLoad(){
            const starButton=<div role="button" aria-label="Star Message">⭐</div>;
            function addStar(){

            };
        },
        onUnload(){

        }
    }
};