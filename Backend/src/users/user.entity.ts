import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserRole = 'user' | 'pengusaha';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['user', 'pengusaha'],
    default: 'user',
  })
  role: UserRole;
}
