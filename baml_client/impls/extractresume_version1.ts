// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { GPT4 } from '../client';
import { ExtractResume } from '../function';
import { schema } from '../json_schema';
import { Deserializer } from '@boundaryml/baml-core/deserializer/deserializer';


const prompt_template = `\
Parse the following resume and return a structured representation of the data in the schema below.

Resume:
---
{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}
---

Output JSON format (only include these fields, and no others):
{
  "name": string,
  "education": {
    "school": string,
    "degree": string,
    "year": int
  }[],
  "skills": string[]
}

Output JSON:\
`;

const deserializer = new Deserializer<Resume>(schema, {
  $ref: '#/definitions/ExtractResume_output'
});

ExtractResume.registerImpl('version1', async (
  arg: string
): Promise<Resume> => {
  
    const result = await GPT4.run_prompt_template(
      prompt_template,
      [
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}",
      ],
      {
        "{//BAML_CLIENT_REPLACE_ME_MAGIC_input//}": arg,
      }
    );

    return deserializer.coerce(result.generated);
  }
);


