import {
  Configuration,
  OpenAIApi,
} from 'openai';

const configuration = new Configuration({
    organization: "org-oQDLNHhZG27uAdO31udmwSJa",
    apiKey: "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",
    
});
const openai = new OpenAIApi(configuration);
export default openai;