export interface Article {
    id?: number;
    article_name: string;
    article_type_id: number;
    article_description: string;
    article_price: number;
    article_stock: number;
    create_at?: Date;
}