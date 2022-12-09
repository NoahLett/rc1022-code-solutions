select "customers"."firstName",
      "customers"."lastName",
      sum("payments"."amount") as "totalAmount"
    FROM "customers"
    JOIN "payments" using ("customerId")
    GROUP BY "customers"."customerId"
    order by "totalAmount" desc;
