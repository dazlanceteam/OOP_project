

package org.example.backend.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "productType",
        visible = true
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Product.PerishableProduct.class, name = "PERISHABLE"),
        @JsonSubTypes.Type(value = Product.NonPerishableProduct.class, name = "NON_PERISHABLE")
})
public abstract class Product {

    private String productType;
    private String productId;
    private String name;
    private double price;

    public Product() {}

    public String getProductType() { return productType; }
    public void setProductType(String productType) { this.productType = productType; }

    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    // 🔹 Perishable
    public static class PerishableProduct extends Product {
        private String expiryDate;

        public String getExpiryDate() { return expiryDate; }
        public void setExpiryDate(String expiryDate) { this.expiryDate = expiryDate; }
    }

    // 🔹 Non-Perishable
    public static class NonPerishableProduct extends Product {
        private int warrantyMonths;

        public int getWarrantyMonths() { return warrantyMonths; }
        public void setWarrantyMonths(int warrantyMonths) {
            this.warrantyMonths = warrantyMonths;
        }
    }
}
