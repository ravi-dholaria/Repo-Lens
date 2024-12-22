import { SignedIn, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <SignedIn>
        <UserButton afterSwitchSessionUrl="/" />
      </SignedIn>
      <div>
        <h1 className="h1-bold">NextJS 13 is here!</h1>
        <h2 className="h2-bold">NextJS 13 is here!</h2>
        <h3 className="h3-bold">NextJS 13 is here!</h3>
      </div>
    </>
  );
}
