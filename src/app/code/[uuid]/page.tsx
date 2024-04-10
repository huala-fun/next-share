import CodeView from "@/components/code-view";
import { genCodeShareKey, redis } from "@/lib/redis";


export default async function Page({ params: { uuid } }: { params: { uuid: string } }) {
    const key = genCodeShareKey(uuid)
    const res: { code: string, language: string } = await redis.get(key) as any;
    return (
        <div className="mt-4 sm:mt-8">
            <CodeView className=" max-sm:shadow-none" code={res.code} language={res.language} />
        </div>
    );
}