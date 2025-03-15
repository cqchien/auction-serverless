import type { Handler, Context, ScheduledEvent } from "aws-lambda";

export const handler: Handler = async (
  _event: ScheduledEvent,
  _context: Context,
) => {
  console.log("Event: ", _event);
  console.log("Context: ", _context);

  console.log("Hello World");

  return {
    statusCode: 200,
    body: process.env.CUSTOM_VAR,
  };
};
