import {GlobalConfig} from 'payload/types';

export const Global1: GlobalConfig = {
  slug: 'global1',
  access: {
    read: ({req}) => {
      console.log('Global1 access check, transactionID', req.transactionID);
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
