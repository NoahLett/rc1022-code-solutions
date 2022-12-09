select "genres"."name" as "genreType",
      count("filmGenre"."filmId") as "numberOfMovies"
    from "genres"
    join "filmGenre" using ("genreId")
    join "castMembers" using ("filmId")
    where "castMembers"."actorId" = 178
    group by "genreType";
