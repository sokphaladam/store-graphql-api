import { Stream } from 'stream';

export interface Upload {
    file: {
        filename: string;
        mimetype: string;
        encoding: string;
        createReadStream: () => Stream;
    }
}