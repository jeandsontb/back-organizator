import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContacts1725015460049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.contact (
          id integer NOT NULL,
          user_id integer NOT NULL,
          first_name character varying NOT NULL,
          last_name character varying NOT NULL,
          phone character varying NOT NULL,
          date_birth character varying NOT NULL,
          address character varying NOT NULL,
          email character varying NOT NULL,
          created_at timestamp without time zone DEFAULT now() NOT NULL,
          updated_at timestamp without time zone DEFAULT now() NOT NULL,
          PRIMARY KEY (id),
          FOREIGN KEY (user_id) REFERENCES public.user(id)
      );
      
      CREATE SEQUENCE public.contact_id_seq
          AS integer
          START WITH 1
          INCREMENT BY 1
          NO MINVALUE
          NO MAXVALUE
          CACHE 1;
          
      ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;
      
      ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.contact;
        `);
  }
}
