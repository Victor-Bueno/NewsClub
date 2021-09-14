import { NextApiRequest, NextApiResponse } from 'next';

const usersApi = (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Ariel' },
    ]

    return response.json(users)
}

export default usersApi;
