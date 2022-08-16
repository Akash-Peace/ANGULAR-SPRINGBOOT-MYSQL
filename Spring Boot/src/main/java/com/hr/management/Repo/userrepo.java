package com.hr.management.Repo;

import com.hr.management.Models.users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userrepo extends JpaRepository<users, Integer> {}