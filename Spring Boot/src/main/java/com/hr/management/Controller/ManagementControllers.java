package com.hr.management.Controller;

import com.hr.management.Models.projects;
import com.hr.management.Models.users;
import com.hr.management.Repo.projectrepo;
import com.hr.management.Repo.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ManagementControllers {
    @Autowired
    private userrepo userrepo;
    @Autowired
    private projectrepo projectrepo;

    @GetMapping("training_modules/projects")
    public List<projects> getProjects(){
        return projectrepo.findAll();
    }
    @GetMapping("training_modules/id_and_skills")
    public List<users> getUsers(){
        return userrepo.findAll();
    }
}
