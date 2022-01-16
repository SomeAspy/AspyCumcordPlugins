// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{addCommand}from'@cumcord/commands';
import{getNeko}from'./api.js';
export default()=>{
    let removeCommand;
    return{
        onLoad(){
            removeCommand=cumcord.commands.addCommand({
                name:"neko",
                description:"Send images from nekos.life",
                args:[{
                    name:"endpoint",
                    description:"The type of image to get",
                    type:"string",
                    required:true
                }],
                handler:(ctx)=>{return getNeko(ctx.args.endpoint);}
            })
        },
        onUnload(){
            removeCommand();
        }
    }
};