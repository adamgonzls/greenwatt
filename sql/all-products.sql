SELECT
	product_id,
	manufacturer_product_number,
	model,
	price, 
	brand.name AS brand_name,
	file.path AS file_path
FROM product
JOIN brand USING (brand_id)
JOIN file USING (product_id)