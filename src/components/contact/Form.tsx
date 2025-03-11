"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

type Props = {
  submitAction: (payload: any, form: FormData) => Promise<any>;
};

export default function Form({ submitAction }: Props) {
  const [state, submit, pending] = useFormState<any, FormData>(
    submitAction,
    {}
  );
  return (
    <Card className="border border-muted">
      <CardHeader>
        <CardTitle>Send Me a Message</CardTitle>
        <CardDescription>
          Fill out the form below and Ill get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {pending ? "Sending message..." : state?.message}
        <form action={submit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              required
            />
          </div>
          <Input
            className="hidden"
            id="age"
            name="age"
            type="string"
            placeholder="Your age"
          />
          <Button
            type="submit"
            aria-disabled={pending}
            disabled={pending}
            className="w-full"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
