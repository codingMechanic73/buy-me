import { Category } from "src/catelog/category/entities/category.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isActive: boolean;

    @Column()
    productName: string;

    @Column()
    sku: string;

    @Column()
    price: number;

    @Column()
    isNewProduct: boolean;

    @Column()
    productImageURL: string;

    @Column()
    productURL: string;

    @ManyToMany(() => Category, category => category.products)
    categories: Category[];
}
