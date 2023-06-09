package fr.adama.traore.employeemanager.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import fr.adama.traore.employeemanager.exception.UserNotFoundException;
import fr.adama.traore.employeemanager.model.Employee;
import fr.adama.traore.employeemanager.repository.IEmployeeRepository;

@Service
public class EmployeeService {
    private final IEmployeeRepository employeeRepository;

    public EmployeeService(IEmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Employee id " + id + " not found"));
    }
}
