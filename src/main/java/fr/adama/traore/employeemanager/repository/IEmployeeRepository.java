package fr.adama.traore.employeemanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import fr.adama.traore.employeemanager.model.Employee;

public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
    
}
