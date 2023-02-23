package com.adambello.issuetracker.repository;

import com.adambello.issuetracker.model.Issue;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {
}
