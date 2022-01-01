import { Product } from "src/catelog/product/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isCategoryActive: boolean;

    @Column()
    categoryName: boolean;

    @Column()
    categoryImageUrl: boolean;

    @ManyToMany(() => Product, product => product.categories)
    @JoinTable()
    products: Product[];
}