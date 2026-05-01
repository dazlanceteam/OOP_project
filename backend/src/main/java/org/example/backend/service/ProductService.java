package org.example.backend.service;



import org.example.backend.model.Product;
import org.example.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public String addProduct(Product product) {

        if (product.getProductId() == null || product.getProductId().isEmpty()) {
            return "INVALID PRODUCT ID";
        }

        if (product.getName() == null || product.getName().isEmpty()) {
            return "INVALID NAME";
        }

        if (product.getPrice() < 0) {
            return "INVALID PRICE";
        }

        repo.add(product);
        return "PRODUCT ADDED";
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getById(String id) {
        return repo.findAll()
                .stream()
                .filter(p -> p.getProductId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public List<Product> searchByName(String name) {
        return repo.findAll()
                .stream()
                .filter(p -> p.getName().toLowerCase().contains(name.toLowerCase()))
                .toList();
    }

    public String deleteProduct(String id) {
        return repo.deleteById(id) ? "PRODUCT DELETED" : "PRODUCT NOT FOUND";
    }

    public String updatePrice(String id, double price) {

        if (price < 0) return "INVALID PRICE";

        List<Product> list = repo.findAll();

        for (Product p : list) {
            if (p.getProductId().equals(id)) {
                p.setPrice(price);
                repo.saveAll(list);
                return "PRICE UPDATED";
            }
        }

        return "PRODUCT NOT FOUND";
    }
}