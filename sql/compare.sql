SELECT *
FROM product
JOIN fan USING (product_id)
WHERE product_id = :product1_id
OR product_id = :product2_id