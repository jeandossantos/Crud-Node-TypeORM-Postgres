import { EntityRepository, Repository } from "typeorm";
import { Video } from "../entities/Video";

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> { }