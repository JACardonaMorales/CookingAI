import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true }) // Hacemos que el email sea único
  email: string;

  @Column()
  password?: string;

  @Column()
  age: number;

  @Column({ default: true }) // Por defecto, el usuario está activo
  isActive: boolean;

  @Column('simple-array', { nullable: true })
  preferences: string[];
}