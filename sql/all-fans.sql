SELECT
	product_id,
	manufacturer_product_number,
	model,
	price, 
	brand.name as brand_name,
	file.path as file_path
FROM product
JOIN brand USING (brand_id)
JOIN file USING (product_id)
WHERE product_type_id = 1