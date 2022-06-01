// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
//cumcord.modules.webpack.findByProps("has").getChannel(channelId)?.nsfw
import { addCommand } from '@cumcord/commands';
import { getNeko } from './api.js';
let commands = [];
export default () => {
    let removeCommand;
    return {
        onLoad() {
            commands.push(
                cumcord.commands.addCommand({
                    name: 'neko',
                    description: 'Send images from nekos.life',
                    args: [
                        {
                            name: 'endpoint',
                            description: 'The type of image to get',
                            type: 'string',
                            required: true,
                            choices: [
                                {
                                    name: 'dog',
                                    value: 'woof',
                                },
                                {
                                    name: 'tickle',
                                    value: 'tickle',
                                },
                                {
                                    name: 'slap',
                                    value: 'slap',
                                },
                                {
                                    name: 'poke',
                                    value: 'poke',
                                },
                                {
                                    name: 'pat',
                                    value: 'pat',
                                },
                                {
                                    name: 'neko',
                                    value: 'neko',
                                },
                                {
                                    name: 'cat',
                                    value: 'meow',
                                },
                                {
                                    name: 'lizard',
                                    value: 'lizard',
                                },
                                {
                                    name: 'kiss',
                                    value: 'kiss',
                                },
                                {
                                    name: 'hug',
                                    value: 'hug',
                                },
                                {
                                    name: 'foxGirl',
                                    value: 'fox_girl',
                                },
                                {
                                    name: 'feed',
                                    value: 'feed',
                                },
                                {
                                    name: 'cuddle',
                                    value: 'cuddle',
                                },
                                {
                                    name: 'nekoGif',
                                    value: 'ngif',
                                },
                                {
                                    name: 'kemonomimi',
                                    value: 'kemonomimi',
                                },
                                {
                                    name: 'holo',
                                    value: 'holo',
                                },
                                {
                                    name: 'smug',
                                    value: 'smug',
                                },
                                {
                                    name: 'baka',
                                    value: 'baka',
                                },
                                {
                                    name: 'wallpaper',
                                    value: 'wallpaper',
                                },
                                {
                                    name: 'goose',
                                    value: 'goose',
                                },
                                {
                                    name: 'gecg',
                                    value: 'gecg',
                                },
                                {
                                    name: 'avatar',
                                    value: 'avatar',
                                },
                                {
                                    name: 'waifu',
                                    value: 'waifu',
                                },
                            ],
                        },
                    ],
                    handler: (ctx, send) => {
                        return getNeko(ctx.args.endpoint, send);
                    },
                }),
            );
        },
        onUnload() {
            commands.forEach((removeCommand) => removeCommand());
        },
    };
};
