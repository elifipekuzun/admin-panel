import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/images');
    options.filename = (name, ext, path, form) => {
      return path.originalFilename!;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await fs.readdir(path.join(process.cwd() + '/public', '/images'));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd() + '/public' + '/images'));
    }
    await readFile(req, true);
    res.json({ message: 'Success' });
  }
};

export default handler;
