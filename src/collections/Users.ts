import {CollectionConfig, PayloadRequest} from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users;

async function postCreateHook(request: PayloadRequest) {
  const transactionId = await request.payload.db.beginTransaction();
}
