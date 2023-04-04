import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  registered: number,
  paid: number
}
const API_KEY = process.env.NOTION_API_KEY as string;

const notion = new Client({ auth: API_KEY });

const databaseUrlOrId = "1b3c3237691d4b25a8139b089ee98daa"; // Signups #4

async function getDatabaseData() {
  try {
    const response = await notion.databases.query({
      database_id: databaseUrlOrId,
      // filter: {
      //   or: [
      //     {
      //       property: 'Participant',
      //       title: {
      //         is_not_empty: true,
      //       },
      //     },
      //   ],
      // },
    });
    const registered = response?.results?.length;
    const paid = response?.results?.filter((item) => (item as any)?.properties['Paid']?.checkbox)?.length
    return {
      registered,
      paid,
    };
  } catch (error) {
    console.error('Error retrieving database', error);
  }
  
}

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getDatabaseData().then((data) => {
    if(data?.registered) {
      return res.status(200).json({ registered: data?.registered, paid: data?.paid })
    } else {
      return res.status(500).json({ registered: 0, paid: 0 })
    }
  })
}
