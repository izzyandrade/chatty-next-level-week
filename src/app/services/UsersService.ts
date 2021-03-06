import { getCustomRepository, Repository } from "typeorm";
import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface IUserCreate {
  email: string;
}

interface IUserFindByEmail {
  email: string;
}

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ email }: IUserCreate) {
    const userAlreadyExists = await this.usersRepository.findOne({ email });
    if (userAlreadyExists) return userAlreadyExists;

    const user = this.usersRepository.create({ email });
    await this.usersRepository.save(user);
    return user;
  }

  async findByEmail({ email }: IUserFindByEmail) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }
}

export { UsersService };
