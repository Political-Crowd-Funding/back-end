create or replace function update_counters()
        returns trigger
        language plpgsql
        as $$
        declare
        begin
        update posts
        set vote_tally = vote_tally +1
        where post_id = NEW.post_id;
        RETURN NEW;
        end;



        $$;
