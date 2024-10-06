'use server';

import { Client } from '@notionhq/client';

const dbId = '034f5c56085d4ae0a91f7cde65ab52b1';
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function addInterestedPerson() {
  try {
    await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        'First Name': {
          rich_text: [
            {
              text: {
                content: 'Anonymous Interested',
              },
            },
          ],
        },
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to register interest' };
  }
}
