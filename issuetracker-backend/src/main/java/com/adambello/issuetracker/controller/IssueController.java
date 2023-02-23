package com.adambello.issuetracker.controller;

import com.adambello.issuetracker.exception.IssueNotFoundException;
import com.adambello.issuetracker.exception.UserNotFoundException;
import com.adambello.issuetracker.model.Issue;
import com.adambello.issuetracker.model.User;
import com.adambello.issuetracker.repository.IssueRepository;
import com.adambello.issuetracker.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class IssueController {

  @Autowired
  private IssueRepository issueRepository;

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/issue")
  Issue newIssue(@RequestBody Issue newIssue) {
    return issueRepository.save(newIssue);
  }

  @GetMapping("/issues")
  List<Issue> getAllIssues() {
    return issueRepository.findAll();
  }

  @GetMapping("/issue/{id}")
  Issue getIssueById(@PathVariable Long id) {
    return issueRepository.findById(id)
            .orElseThrow(() -> new IssueNotFoundException(id));
  }

  @PutMapping("/issue/{id}")
  Issue updateIssue(@RequestBody Issue newIssue, @PathVariable Long id) {
    return issueRepository.findById(id)
            .map(issue -> {
              issue.setTitle(newIssue.getTitle());
              issue.setDescription(newIssue.getDescription());
              issue.setPriority(newIssue.getPriority());
              issue.setStatus(newIssue.getStatus());
              return issueRepository.save(issue);
            }).orElseThrow(() -> new IssueNotFoundException(id));
  }

  @PutMapping("/assign-issue/{id}/{userId}")
  Issue assign(@PathVariable Long userId, @PathVariable Long id) {
    return issueRepository.findById(id)
            .map(issue -> {
              issue.setReporter(userRepository.findById(userId).
                      orElseThrow(() -> new UserNotFoundException(userId)));
              return issueRepository.save(issue);
            }).orElseThrow(() -> new IssueNotFoundException(id));
  }

  @DeleteMapping("/issue/{id}")
  String deleteIssue(@PathVariable Long id) {
    if (!issueRepository.existsById(id)) {
      throw new IssueNotFoundException(id);
    }
    issueRepository.deleteById(id);
    return "Issue with id: " + id + " has been deleted successfully";
  }
}
