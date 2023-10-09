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
  const users = await request.payload.find({
    collection: 'users',
    req: {
      payload: request.payload,
      transactionID: transactionId ?? undefined,
    } as PayloadRequest
  });
  await request.payload.db.commitTransaction(transactionId);
}
