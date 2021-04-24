import { Repository, EntityRepository } from "typeorm";
import Connection from "../models/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };
