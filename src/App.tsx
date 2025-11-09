import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
export default function App() {
  const CARDS = [
    {
      title: "Flowbite React Docs",
      description:
        "Learn more on how to get started and use the Flowbite React components",
      url: "https://flowbite-react.com/",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
          />
        </svg>
      ),
    },
    {
      title: "Flowbite Blocks",
      description:
        "Get started with over 450 blocks to build websites even faster",
      url: "https://flowbite.com/blocks/",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
          />
        </svg>
      ),
    },
    {
      title: "Flowbite Icons",
      description:
        "Get started with over 650+ SVG free and open-source icons for your apps",
      url: "https://flowbite.com/icons/",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"
          />
        </svg>
      ),
    },
    {
      title: "Flowbite Illustrations",
      description:
        "Start using over 50+ SVG illustrations in 3D style to add character to your apps",
      url: "https://flowbite.com/illustrations/",
      icon: (
        <svg
          className="h-9 w-9 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      ),
    },
    {
      title: "Flowbite Pro",
      description:
        "Upgrade your development stack with more components and templates from Flowbite",
      url: "https://flowbite.com/pro/",
      icon: <img alt="Flowbite Pro logo" src="/flowbite.svg" />,
    },
    {
      title: "Flowbite Figma",
      description:
        "Use our Figma Design System to design and collaborate better within your team",
      url: "https://flowbite.com/figma/",
      icon: <img alt="Figma logo" src="/figma.svg" />,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-gray-900">
      <div className="absolute inset-0 size-full">
        <div className="relative h-full w-full select-none">
          <img
            className="absolute right-0 min-w-dvh dark:hidden"
            alt="Pattern Light"
            src="/pattern-light.svg"
          />
          <img
            className="absolute right-0 hidden min-w-dvh dark:block"
            alt="Pattern Dark"
            src="/pattern-dark.svg"
          />
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-12">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <a
              href="#"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="mr-2 h-8 w-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              It-Ticket
            </a>
            <div className="w-full rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="flex max-w-md flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1">Your email</Label>
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1">Your password</Label>
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <Button color="default" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
