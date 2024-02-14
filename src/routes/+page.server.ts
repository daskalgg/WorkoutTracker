import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from '$env/static/private'
/** @type {import('./$types').Actions} */
const db = createPool({ connectionString: POSTGRES_URL })
export const actions = {
    send: async ({request}: any) => {
        const formData = await request.formData();
        const text = formData.get('text');
        await db.query(`insert into Todo (message) values ('${text}')`);
        return text + " Server";
    }
};

