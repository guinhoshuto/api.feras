export interface TeamProps {
  id?: string;
  twitchUserId: string;
  twitchUsername: string;
  twitchDisplayName: string;
  twitchProfileImageUrl?: string;
  offlineImageUrl?: string;
}

export class Team {
  private props: TeamProps;
}
