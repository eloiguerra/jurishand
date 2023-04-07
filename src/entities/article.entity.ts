import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { ArticleModel } from "../domain/models/article-model.struct";

@Entity('articles')
export class Articles implements ArticleModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'text' })
    title: string;
    @Column({ type: 'text' })
    author: string;
    @Column({ type: 'text' })
    content: string;
    @Column({ type: 'text' })
    date: Date;
    @Column({ type: 'text' })
    category: string;
}