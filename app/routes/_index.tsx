import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import {
  redirect,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Code Memo App" },
    {
      name: "description",
      content: "This app is an innovative code note app!",
    },
  ];
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Code Memo App</h1>
      <UserButton afterSignOutUrl="/" />

      <Button>test</Button>
    </div>
  );
}
