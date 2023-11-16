DO $$
BEGIN
    CREATE SCHEMA IF NOT EXISTS psy;
    CREATE TABLE IF NOT EXISTS psy.registry(
        id uuid PRIMARY KEY DEFAULT gen_random_uuid( ),
        status varchar(40 ) NOT NULL,
        situation text DEFAULT NULL,
        thoughts text DEFAULT NULL,
        emotion text DEFAULT NULL,
        sensation text DEFAULT NULL,
        conduct text DEFAULT NULL,
        consequences text DEFAULT NULL,
        previous_situations text DEFAULT NULL,
        rationalizing_thoughts text DEFAULT NULL,
        created_at timestamptz DEFAULT NOW( )
    );
END
$$;

