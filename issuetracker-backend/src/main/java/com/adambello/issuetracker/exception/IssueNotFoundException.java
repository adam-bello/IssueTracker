package com.adambello.issuetracker.exception;

public class IssueNotFoundException extends RuntimeException {
  public IssueNotFoundException(Long id) {
    super("Could not find the issue with id: " + id);
  }
}
