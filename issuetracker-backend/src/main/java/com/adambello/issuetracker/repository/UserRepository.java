package com.adambello.issuetracker.repository;

import com.adambello.issuetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
