import { Injectable, UseGuards } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';
import axios from 'axios';
import { TwitchUser } from './entities/twitchUser.entity';
import { mergeFerasWithStreamData } from 'src/helpers/merge-feras-with-stream-data';

export const url_users = 'https://api.twitch.tv/helix/users?login=';
export const stream_url = 'https://api.twitch.tv/helix/streams?user_login=';
export const headers = {
  headers: {
    Authorization: process.env.TWITCH_TOKEN,
    'Client-Id': process.env.TWITCH_CLIENT_ID,
  },
};

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto): Promise<void> {
    console.log(createTeamDto);
    await this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll() {
    return this.prisma.team.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  async searchTwitchUserByUsername(username: string): Promise<TwitchUser> {
    console.log(url_users + username);
    const user = await axios.get(url_users + username, headers);
    return user.data.data[0];
  }

  async getTeam() {
    const feras = await this.findAll();
    const ferasUsernames = feras.map((f: any) => f.twitchUsername);
    const streamData = await axios.get(
      stream_url + ferasUsernames.join('&user_login='),
      headers,
    );
    // console.log('oi', mergeFerasWithStreamData(feras, streamData.data.data));
    return mergeFerasWithStreamData(feras, streamData.data.data);
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: string) {
    return this.prisma.team.delete({
      where: {
        twitchUserId: id,
      },
    });
  }
}
