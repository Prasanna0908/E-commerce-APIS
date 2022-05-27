# Hybr1d-E-commerce-APIS

Create a config.env file in the root directory and fill it with the following informations :

PORT=5000

DATABASE_CONNECTION="Your DB URI"

JWT_SECRET="Your JWT Secret key"
JWT_EXPIRE="10min"



# 1. Auth APIs: 

## POST /api/auth/register

### 1. Buyer 
![image](https://user-images.githubusercontent.com/65851817/170741610-77d662b0-2882-462e-9f20-f88df859c02a.png)

### 2.Seller
![image](https://user-images.githubusercontent.com/65851817/170741828-3886de31-56ba-4197-8df9-29becdf19b70.png)

## POST /api/auth/login

### 1. Seller logins as seller - succes
![image](https://user-images.githubusercontent.com/65851817/170742141-2e46d3f8-30c4-4eda-ad82-56f455a9ba04.png)

### 2. Seller logins as buyer
![image](https://user-images.githubusercontent.com/65851817/170742359-38e7ba33-ffbc-46fd-9066-e6c69566ae35.png)

# 2.APIs for buyers

## GET /api/buyer/list-of-sellers

![image](https://user-images.githubusercontent.com/65851817/170742640-e085c4d9-acb0-4a2b-9856-2d2241f709b4.png)

## GET /api/buyer/seller-catalog/:seller_id (Buyer_id is taken from token)

![image](https://user-images.githubusercontent.com/65851817/170760987-c560ace6-1c47-4e93-b380-1008f6b2eeed.png)

## POST /api/buyer/create-order/:seller_id

![image](https://user-images.githubusercontent.com/65851817/170761904-facc0f63-9fd7-4ee1-94cb-08b234f4786f.png)



# APIs for sellers

## POST /api/seller/create-catalog

First insert bearer token which we get after login (token)
![image](https://user-images.githubusercontent.com/65851817/170758710-d7a1a86e-ffea-422a-8efd-826999757265.png)

![image](https://user-images.githubusercontent.com/65851817/170758929-462eef84-be34-4de9-a6ab-a3b94840f2c2.png)

## GET /api/seller/orders

![image](https://user-images.githubusercontent.com/65851817/170761735-6a0bdca5-7cf6-4819-91b2-22f06a9edc26.png)



