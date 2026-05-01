package org.example.backend.controller;



import org.example.backend.model.Product;
import org.example.backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public String addProduct(@RequestBody Product product) {
        return service.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable String id) {
        return service.getById(id);
    }

    @GetMapping("/search")
    public List<Product> search(@RequestParam String name) {
        return service.searchByName(name);
    }

    @PutMapping("/{id}/price")
    public String updatePrice(@PathVariable String id,
                              @RequestParam double price) {
        return service.updatePrice(id, price);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }
}
