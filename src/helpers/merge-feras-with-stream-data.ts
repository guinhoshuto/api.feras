export const mergeFerasWithStreamData = (twitchUsers, streamData) => {
  console.log(streamData);
  const team = [];
  twitchUsers.forEach((user: any) => {
    const feraOnline = streamData.find(
      (stream: any) => stream.user_login === user.twitchUsername,
    );
    if (typeof feraOnline === undefined) return;
    const ferasStats = {
      is_live: feraOnline ? true : false,
      title: feraOnline ? feraOnline.title : '',
      viewer_count: feraOnline ? feraOnline.viewer_count : '',
      game_name: feraOnline ? feraOnline.game_name : '',
      user_name: feraOnline ? feraOnline.user_name : '',
      started_at: feraOnline ? feraOnline.started_at : '',
      language: feraOnline ? feraOnline.language : '',
      thumbnail_url: feraOnline ? feraOnline.thumbnail_url : '',
      user_id: feraOnline ? feraOnline.user_id : '',
      profile_image_url: user.profile_image_url,
      offline_image_url: user.offline_image_url,
      view_count: user.view_count,
    };

    team.push({
      fera: user.twitchUsername,
      ...ferasStats,
    });
  });

  return team;
};
