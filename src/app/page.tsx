import Link from "next/link";




const Item = ({ title, description, href }: { title: string; description: string, href: string }) => {
  return (
    <Link
      href={href}
      className=" px-12 sm:px-5 group rounded-lg border border-transparent  py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </Link>
  )
}

const itemList = [
  {
    href: "/code",
    title: "Code Sharing",
    description: "Share your code, support highlighting, expiration limits, and encrypted sharing.",
  },
  {
    href: "/md",
    title: "Markdown Sharing",
    description: "Share your Markdown, support highlighting, expiration limits, and encrypted sharing.",
  },
  {
    href: "/image",
    title: "Album Sharing",
    description: "Share your photo collection, expiration limits, and encrypted sharing.",
  },
  {
    href: "/short",
    title: "Short Link Sharing",
    description: "Compress long links, support expiration limits, and encrypted sharing.",
  }
]


export default function Home() {
  return (
    <div className="mt-4 sm:mt-32 grid text-center lg:grid-cols-2 lg:text-left">
      {
        itemList.map((item, index) => {
          return (
            <Item key={index} title={item.title} description={item.description} href={item.href} />
          )
        })
      }
    </div>
  );
}