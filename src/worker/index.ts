import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

const app = new Hono<{ Bindings: Cloudflare.Env; }>();

app.onError((error, c) => {
	if (error instanceof HTTPException) {
		return error.getResponse();
	}

	console.error(error);

	return c.json({ message: 'Internal Server Error' }, 500);
});

export default app;
