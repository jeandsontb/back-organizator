import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './entity/contact.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateContactDTO } from './dtos/create-contact.dto';
import { UserService } from 'src/user/user.service';
import { UpdateContactDTO } from './dtos/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepository: Repository<ContactEntity>,
    private readonly userService: UserService,
  ) {}

  async getAllContacts(userId: number): Promise<ContactEntity[]> {
    await this.userService.findUserById(userId);

    return this.contactRepository.find({
      where: {
        userId,
      },
    });
  }

  async getOneContact(
    idContact: number,
    userId: number,
  ): Promise<ContactEntity> {
    await this.userService.findUserById(userId);

    return this.contactRepository.findOne({
      where: {
        userId,
        id: idContact,
      },
    });
  }

  async createContact(
    createContactDto: CreateContactDTO,
    userId: number,
  ): Promise<ContactEntity> {
    await this.userService.findUserById(userId);

    return this.contactRepository.save({
      ...createContactDto,
      userId,
    });
  }

  async updateContact(
    updateContactDto: UpdateContactDTO,
    idUser: number,
  ): Promise<ContactEntity> {
    await this.userService.findUserById(idUser);

    const contact = await this.contactRepository.findOne({
      where: {
        userId: idUser,
        id: updateContactDto.id,
      },
    });

    return this.contactRepository.save({
      ...contact,
      ...updateContactDto,
    });
  }

  async deleteContact(
    idContact: number,
    userId: number,
  ): Promise<DeleteResult> {
    await this.userService.findUserById(userId);

    return this.contactRepository.delete({
      userId,
      id: idContact,
    });
  }
}
