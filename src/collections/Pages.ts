import {CollectionConfig} from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterRead: [
      async () => await new Promise<void>(resolve => {
        setTimeout(resolve, 1500);
      }),
    ]
  },
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
