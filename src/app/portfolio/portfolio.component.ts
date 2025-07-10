import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_modles/Project'; // Typo: Should be `_models`
import { Tag } from '../_modles/Tag'; // Typo: Should be `_models`
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as project[];
  isCollapsed: boolean = true; // Make sure this property exists and is initialized

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Aman Raj - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  // Method to toggle the collapse state
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}