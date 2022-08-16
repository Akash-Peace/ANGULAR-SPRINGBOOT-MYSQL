package com.hr.management.Repo;

import com.hr.management.Models.projects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface projectrepo extends JpaRepository<projects, String> {
}
