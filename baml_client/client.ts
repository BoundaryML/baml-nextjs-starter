// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck


import { clientManager } from '@boundaryml/baml-core/client_manager';


const GPT3 = clientManager.createClient('GPT3', 'baml-openai-chat', {
    model: "gpt-3",
    api_key: process.env.OPENAI_API_KEY
});

const GPT4 = clientManager.createClient('GPT4', 'baml-openai-chat', {
    model: "gpt-4",
    api_key: process.env.OPENAI_API_KEY
});

const GPT4Turbo = clientManager.createClient('GPT4Turbo', 'baml-openai-chat', {
    model: "gpt-4-1106-preview",
    api_key: process.env.OPENAI_API_KEY
});


export { GPT3, GPT4, GPT4Turbo }