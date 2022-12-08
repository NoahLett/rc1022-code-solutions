select "customers"."firstName",
      "customers"."lastName",
      "payments"."amount"
  from "customers"
  join "payments" USING ("customerId")
  order by "amount" DESC
LIMIT 10;
