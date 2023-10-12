import {CollectionConfig} from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  hooks: {
    afterRead: [
      async ({req}) => {
        console.log('pages after read, transactionID', req.transactionID);
        // await new Promise<void>(resolve => {
        //   setTimeout(resolve, 1500);
        // });
      },
    ]
  },
  access: {
    read: ({req}) => {
      console.log('pages access check, transactionID', req.transactionID);
      return true;
    },
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
