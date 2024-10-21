import { createClient } from 'microcms-js-sdk'
import { MicroCMSContentType } from './const';
import { MicroCMSQueries } from 'microcms-js-sdk';

import type { MicroCMSNews, MicroCMSBlog } from './type';


export class MicroCMSService {

    private client: ReturnType<typeof createClient>;

    constructor() {
        if (!process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN || !process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY) {
            throw new Error("MicroCMSの環境変数が設定されていません。");
        }
        this.client = createClient({
            serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN!,
            apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY!,
        })
    }

    async getNews(queries?: MicroCMSQueries) {
        return await this.client.get<{
            contents: MicroCMSNews[];
            totalCount: number;
        }>({
            endpoint: MicroCMSContentType.NEWS,
            queries,
        });
    }

    async getNewsById(id: string) {
        return await this.client.get<MicroCMSNews>({
            endpoint: MicroCMSContentType.NEWS,
            queries: { ids: [id] },
        });
    }

    async getBlogs(queries?: MicroCMSQueries) {
        return await this.client.get<{
            contents: MicroCMSBlog[];
            totalCount: number;
        }>({
            endpoint: MicroCMSContentType.BLOG,
            queries,
        });
    }

    async getBlogsById(id: string) {
        return await this.client.get<MicroCMSBlog>({
            endpoint: MicroCMSContentType.BLOG,
            queries: { ids: [id] },
        });
    }
}