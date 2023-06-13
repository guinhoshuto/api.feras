export interface twitchUserProps {
  id: string;
  login: string;
  display_name: string;
  type?: string | null;
  brodcaster_type: string;
  descrition: string;
  profile_image_url: string;
  offiline_image_url?: string | null;
  view_count: number;
  created_at: string;
}

export class TwitchUser {
  private props: twitchUserProps;
}
