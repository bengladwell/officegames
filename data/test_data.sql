insert into players values(1, 'Ben', 'ben@officegames.com', current_timestamp, current_timestamp);
insert into players values(2, 'Phil', 'phil@officegames.com', current_timestamp, current_timestamp);
insert into players values(3, 'Justin', 'justin@officegames.com', current_timestamp, current_timestamp);
insert into players values(4, 'Jenna', 'jenna@officegames.com', current_timestamp, current_timestamp);

insert into teams values(1, 'Team 1', current_timestamp, current_timestamp);
insert into teams values(2, 'Team 2', current_timestamp, current_timestamp);

insert into players_teams (player_id, team_id) values(1, 1);
insert into players_teams (player_id, team_id) values(2, 1);
insert into players_teams (player_id, team_id) values(3, 2);
insert into players_teams (player_id, team_id) values(4, 2);

insert into activities values(1, 'Ping Pong', current_timestamp, current_timestamp);
insert into activities values(2, 'Darts', current_timestamp, current_timestamp);

insert into matches values(1, 1, current_timestamp, current_timestamp, current_timestamp);
insert into matches values(2, 2, current_timestamp, current_timestamp, current_timestamp);

insert into matches_teams (match_id, team_id, winner) values(1, 1, 1);
insert into matches_teams (match_id, team_id, winner) values(1, 2, 0);
insert into matches_teams (match_id, team_id, winner) values(2, 1, 0);
insert into matches_teams (match_id, team_id, winner) values(2, 2, 1);
