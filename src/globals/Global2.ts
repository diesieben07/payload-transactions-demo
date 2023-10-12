import {GlobalConfig} from 'payload/types';

export const Global2: GlobalConfig = {
  slug: 'global2',
  access: {
    read: ({req}) => {
      console.log('Global2 access check, transactionID', req.transactionID);
      return true;
    },
  },
  fields: [
    {
      type: 'text',
      name: 'testText',
      defaultValue: '12345'
    }
  ]
};
