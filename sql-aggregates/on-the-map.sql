select "countries"."name" as "countryName",
      count("cities"."name") as "numberOfCities"
    from "countries"
    join "cities" using ("countryId")
    group by "countries"."countryId"
    order by "countryName" ASC;
