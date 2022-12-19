export interface TeamProps {
  id?: string;
  twitchUserId: string;
  twitchUsername: string;
  twitchProfileUrl?: string;
  offlineImageUrl?: string;
}

export class Team {
  private props: TeamProps;
}
