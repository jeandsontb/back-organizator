import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateContactDTO } from './dtos/create-contact.dto';
import { ContactEntity } from './entity/contact.entity';
import { ContactService } from './contact.service';
import { Roles } from 'src/decorators/roles-decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id-decorator';
import { UpdateContactDTO } from './dtos/update-contact.dto';
import { DeleteResult } from 'typeorm';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Roles(UserType.User)
  @Get()
  @UsePipes(ValidationPipe)
  async getAllContacts(@UserId() userId: number): Promise<ContactEntity[]> {
    return this.contactService.getAllContacts(Number(userId));
  }

  @Roles(UserType.User)
  @Get('/:idContact')
  @UsePipes(ValidationPipe)
  async getOneContact(
    @Param('idContact') idContact: number,
    @UserId() userId: number,
  ): Promise<ContactEntity> {
    return this.contactService.getOneContact(Number(idContact), Number(userId));
  }

  @Roles(UserType.User)
  @Post()
  @UsePipes(ValidationPipe)
  async createContact(
    @Body() createContactDto: CreateContactDTO,
    @UserId() userId: number,
  ): Promise<ContactEntity> {
    return this.contactService.createContact(createContactDto, Number(userId));
  }

  @Roles(UserType.User)
  @Put()
  @UsePipes(ValidationPipe)
  async updateContact(
    @Body() updateContactDto: UpdateContactDTO,
    @UserId() userId: number,
  ): Promise<ContactEntity> {
    return this.contactService.updateContact(updateContactDto, Number(userId));
  }

  @Roles(UserType.User)
  @Delete('/:idContact')
  @UsePipes(ValidationPipe)
  async deleteContact(
    @Param('idContact') idContact: number,
    @UserId() userId: number,
  ): Promise<DeleteResult> {
    return this.contactService.deleteContact(Number(idContact), Number(userId));
  }
}
