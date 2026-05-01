package org.example.backend.repository;



import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.backend.model.Product;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepository {

    private final String FILE_PATH = "backend/data/products.json";
    private final ObjectMapper mapper = new ObjectMapper();

    private File getFile() {
        File file = new File(FILE_PATH);
        try {
            if (!file.exists()) {
                file.getParentFile().mkdirs();
                mapper.writeValue(file, new ArrayList<>());
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return file;
    }

    public List<Product> findAll() {
        try {
            return mapper.readValue(getFile(), new TypeReference<List<Product>>() {});
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    public void saveAll(List<Product> products) {
        try {
            mapper.writerWithDefaultPrettyPrinter().writeValue(getFile(), products);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void add(Product product) {
        List<Product> list = findAll();
        list.add(product);
        saveAll(list);
    }

    public boolean deleteById(String id) {
        List<Product> list = findAll();
        boolean removed = list.removeIf(p -> p.getProductId().equals(id));
        saveAll(list);
        return removed;
    }
}
