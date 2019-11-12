/* script file used for pgbench */
\set pid random(1, 200)
\set uid random(1, 40)
INSERT INTO vote_table(post_id,user_id) VALUES(:pid,:uid) ON CONFLICT DO NOTHING;