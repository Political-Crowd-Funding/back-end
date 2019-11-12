CREATE TRIGGER update_counters
 AFTER INSERT
 ON vote_table
 FOR EACH ROW
 EXECUTE PROCEDURE update_counters();