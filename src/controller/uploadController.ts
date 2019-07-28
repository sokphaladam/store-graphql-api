import { Upload } from "../types/Upload";
import { createWriteStream } from "fs";
import uuid from 'uuid/v5';

export const uploadImage = async (root: Upload) => {
    const { filename, createReadStream } = await root.file;

    let newFilename = uuid(filename, uuid.DNS) + '.png';

    createReadStream()
        .pipe(createWriteStream( __dirname + `/../images/${newFilename}` ))

    return newFilename;
}