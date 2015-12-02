SELECT
	file.path AS file_path
FROM product
JOIN file USING (product_id)
WHERE product_id = :id