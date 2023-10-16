import Head from "next/head";
import Button from "@/components/Button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession();
  const handleSignIn = async (): Promise<void> => {
    await signIn();
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {session ? (
        <div>
          Signed in as {session.user.email} <br />{" "}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          Not Signed in <br />{" "}
          <button onClick={() => signIn()}>Sign out</button>
        </div>
      )} */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <Button
            onClick={() => handleSignIn()}
            btnClass="btn-secondary"
            title="Sign up"
          />
        </div>
      </main>
    </>
  );
}
