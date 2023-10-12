import {CollectionConfig} from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      type: "array",
      name: "someArray",
      fields: [
        {
          type: "group",
          name: "someGroup",
          fields: [
            {
              type: "text",
              name: "someText",
            },
          ],
        },
      ],
    }
  ]
}
