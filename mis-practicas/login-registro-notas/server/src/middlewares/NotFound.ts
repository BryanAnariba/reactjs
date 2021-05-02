import { Request, Response } from 'express';

export = ((req: Request, res: Response) => {
    res.status(404).send({
        status: 404,
        data: 'not found'
    });
});