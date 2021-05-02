import { Router, Request, Response } from 'express';

const router = Router();

router.get('', function (req: Request, res: Response) {
    return res.status(200).send({ status: 200, data: 'App is running' });
})


export default router;